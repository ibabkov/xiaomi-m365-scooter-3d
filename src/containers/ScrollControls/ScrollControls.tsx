import React from 'react';

import { Html } from '@react-three/drei';
import { createPortal } from 'react-dom';
import { useFrame, useThree } from '@react-three/fiber';
import { MathUtils } from 'three';

import { ScrollLayout } from '../../components/ScrollLayout';
import { ScrollBar } from '../../components/ScrollBar';
import { useAnimateScroll, useHandleScroll, useSetupInitialCamera } from './hooks';
import { Page } from '../../types/page';
import { PAGE_PROGRESS_THRESHOLD } from './constants';
import { SCROLLING_KEYS } from '../../constants/keys';
import { CAMERA_ANIMATION_DELAY } from '../../constants/camera';
import { updateScrollProgress, updateCameraPositions, updateScrollBar } from './helpers';
import type { ScrollControlsState } from './types';
import { useStore } from '../../hooks/useStore';

export type ScrollControlsProps = {
	/**
	 * The distance to scroll through in one second
	 * Supports a range from 2 to 100
	 */
	distance: number;
	pages: Page[];
};

const INITIAL_STATE: ScrollControlsState = {
	progress: 0,
	pageIndex: 0,
	animating: false,
	scrolling: false,
	tweenGroup: null,
	refs: { layout: React.createRef(), bar: React.createRef() },
	timeouts: { animation: null },
};

export const ScrollControls: React.FC<ScrollControlsProps> = props => {
	const [portalLoaded, setPortalLoaded] = React.useState<boolean>(false);
	const height = React.useMemo(() => MathUtils.clamp(props.distance, 2, 100) * 100, [props.distance]);
	const { camera, gl } = useThree();
	const { actions, pages } = useStore();
	const { current: state } = React.useRef<ScrollControlsState>(INITIAL_STATE);

	/* ======================== SCROLL START HANDLER ======================== */
	const handleScrollStart = React.useCallback(() => {
		actions.moveCamera({ movingCamera: true });
	}, [actions]);

	/* ======================== SCROLL COMPLETE HANDLER ======================== */
	const handleScrollComplete = React.useCallback(() => {
		actions.moveCamera({ movingCamera: false });
		actions.changePage({ pageIndex: state.pageIndex });
	}, [actions, state.pageIndex]);

	/* ======================== SCROLL HANDLER ======================== */
	const handleScroll = useHandleScroll({ state, onScroll: handleScrollStart });

	const animateScroll = useAnimateScroll({ state, pages, onComplete: handleScrollComplete });

	useSetupInitialCamera();

	React.useLayoutEffect(() => {
		const layout = state.refs.layout.current;

		if (portalLoaded && layout) {
			layout.scrollTop = 0; // Reset scroll position

			const handleKeyDown = (e: KeyboardEvent) => {
				// Prevent default scrolling behavior
				if (SCROLLING_KEYS.includes(e.key)) {
					e.preventDefault();
				}
			};

			const handleWheelStart = (event: CustomEvent) => {
				if (event.detail.deltaY >= 0) {
					state.timeouts.animation = setTimeout(() => animateScroll('forward'), CAMERA_ANIMATION_DELAY);
				}
			};

			const handleWheelEnd = () => {
				if (state.progress >= PAGE_PROGRESS_THRESHOLD) return;
				if (state.timeouts.animation) {
					clearTimeout(state.timeouts.animation);
					state.timeouts.animation = null;
				}

				animateScroll('backward');
			};

			window.addEventListener('keydown', handleKeyDown);

			layout.addEventListener('wheel', handleScroll);
			layout.addEventListener('touchmove', handleScroll);

			// @ts-expect-error doesn't exist in the type definitions
			layout.addEventListener('scrollstart', handleWheelStart);
			layout.addEventListener('scrollfinish', handleWheelEnd);

			return () => {
				window.addEventListener('keydown', handleKeyDown);

				layout?.removeEventListener('wheel', handleScroll);
				layout?.removeEventListener('touchmove', handleScroll);

				// @ts-expect-error doesn't exist in the type definitions
				layout?.removeEventListener('scrollstart', handleWheelStart);
				layout?.removeEventListener('scrollfinish', handleWheelEnd);

				if (state.timeouts.animation) {
					clearTimeout(state.timeouts.animation);
					state.timeouts.animation = null;
				}
			};
		}
	}, [pages.length, portalLoaded]);

	useFrame(() => {
		if (!state.refs.layout.current?.clientHeight) return;
		if (!portalLoaded) {
			setPortalLoaded(true);

			return;
		}

		updateScrollProgress(state);
		updateCameraPositions(state, pages, camera);
		updateScrollBar(state, pages);
		state.tweenGroup?.update();
	});

	return (
		<Html transform={false}>
			{createPortal(
				<ScrollLayout ref={state.refs.layout} height={height}>
					<ScrollBar ref={state.refs.bar} height={(1 / pages.length) * 100} />
				</ScrollLayout>,
				gl.domElement.parentNode as HTMLElement,
				'ScrollControlsPortal',
			)}
		</Html>
	);
};
