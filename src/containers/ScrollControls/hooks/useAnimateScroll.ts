import React from 'react';

import { Easing, Group, Tween } from '@tweenjs/tween.js';

import { CAMERA_ANIMATION_DELAY, CAMERA_ANIMATION_DURATION } from '../../../constants/camera';
import type { ScrollControlsState } from '../types';
import type { Page } from '../../../types/page';
import { PAGE_PROGRESS_THRESHOLD } from '../constants';

export type UseAnimateScrollOptions = {
	pages: Page[];
	onComplete: () => void;
	state: ScrollControlsState;
};

export const useAnimateScroll = (options: UseAnimateScrollOptions) => {
	const { pages, onComplete, state } = options;

	const animateScroll = React.useCallback(
		(direction: 'forward' | 'backward') => {
			const layout = state.refs.layout.current!;
			const scroll = { scrollTop: layout.scrollTop };
			let scrollTo = 0;
			let duration = state.progress * CAMERA_ANIMATION_DURATION * 2;

			if (direction === 'forward') {
				duration = (1 - state.progress) * CAMERA_ANIMATION_DURATION;
				scrollTo = layout.scrollHeight - layout.clientHeight;

				if (state.progress < PAGE_PROGRESS_THRESHOLD) {
					clearTimeout(state.timeouts.animation!);
					state.timeouts.animation! = setTimeout(() => animateScroll('forward'), CAMERA_ANIMATION_DELAY);

					return;
				}
			}

			state.tweenGroup = new Group(
				new Tween(scroll)
					.to({ scrollTop: scrollTo }, duration)
					.easing(Easing.Linear.Out)
					.onStart(() => {
						layout.style.pointerEvents = 'none';
					})
					.onUpdate(() => {
						state.refs.layout.current!.scrollTop = scroll.scrollTop;
					})
					.onComplete(() => {
						const layout = state.refs.layout.current!;
						if (direction === 'forward') {
							layout.scrollTop = 0;
							state.pageIndex = state.pageIndex === pages.length - 1 ? 0 : state.pageIndex + 1;
						}

						state.animating = false;
						state.scrolling = false;
						layout.style.pointerEvents = 'auto';
						onComplete();
					})
					.start(),
			);
		},
		[onComplete, pages, state],
	);

	return animateScroll;
};
