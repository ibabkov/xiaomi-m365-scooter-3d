import React, { useRef } from 'react';

import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { Group } from '@tweenjs/tween.js';

import { useModifyScooterSceneState, useScooterSceneState } from '../../../hooks/scooterSceneContext';
import { animateCamera, getNewPageIndex, setContainerId } from '../helpers';
import { modifyOnScroll } from '../../../modifiers/modifyOnScroll';
import { modifyOnScrollComplete } from '../../../modifiers/modifyOnScrollComplete';
import { IScrollControlsState } from '../../../types/scrollControls';

export const useAnimateCamera = () => {
	const { camera } = useThree();
	const [{ pages }] = useScooterSceneState();
	const tweenGroup = useRef<Group | null>(null);
	const scrollData = useScroll() as IScrollControlsState;
	const onScroll = useModifyScooterSceneState(modifyOnScroll);
	const onScrollComplete = useModifyScooterSceneState(modifyOnScrollComplete);
	const { el: container } = scrollData;
	const [state] = React.useState({
		offset: scrollData.offset,
		pageIndex: 0,
		movingCamera: false,
	});

	/* ======================== SCROLL START HANDLER ======================== */
	const handleScrollStart = React.useCallback(() => {
		onScroll({ movingCamera: true });
	}, [onScroll]);

	/* ======================== SCROLL COMPLETE HANDLER ======================== */
	const handleScrollComplete = React.useCallback(() => {
		state.movingCamera = false;
		const { movingCamera, pageIndex } = state;

		onScroll({ movingCamera });
		onScrollComplete({
			pageIndex,
			movingCamera,
		});
	}, [state, onScroll, onScrollComplete]);

	React.useLayoutEffect(() => setContainerId(container), [container]);

	/* ======================== CAMERA ANIMATION ======================== */
	useFrame(() => {
		const { offset, pageIndex, movingCamera } = state;
		const newOffset = Math.round(scrollData.offset * 100);

		if (!movingCamera && newOffset !== offset) {
			const newPageIndex = getNewPageIndex(pageIndex, pages.length);
			state.pageIndex = newPageIndex;
			state.movingCamera = true;

			tweenGroup.current = animateCamera({
				camera,
				page: pages[pageIndex],
				newPage: pages[newPageIndex],
				onStart: handleScrollStart,
				onComplete: handleScrollComplete,
			});
		}

		state.offset = newOffset;

		tweenGroup.current?.update();
	});
};
