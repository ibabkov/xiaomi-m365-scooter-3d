import React from 'react';

import { getDeltaY } from '../../../utils';
import { ScrollControlsState } from '../types';
import { SCROLL_TIMEOUT_DELAY, SCROLL_TOUCH_TIMEOUT_DELAY } from '../constants';

export type UseHandleScrollOptions = {
	state: ScrollControlsState;
};

export const useHandleScroll = (options: UseHandleScrollOptions) => {
	const { state } = options;
	const lastTouchY = React.useRef<number | null>(null);
	const scrollingTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	React.useLayoutEffect(() => {
		return () => {
			if (scrollingTimeoutRef.current) {
				clearTimeout(scrollingTimeoutRef.current);
				scrollingTimeoutRef.current = null;
			}
		};
	}, []);

	return React.useCallback(
		(event: WheelEvent | TouchEvent) => {
			const isWheelEvent = event instanceof WheelEvent;
			const deltaY = getDeltaY(event, lastTouchY.current);
			const timeoutDelay = isWheelEvent ? SCROLL_TIMEOUT_DELAY : SCROLL_TOUCH_TIMEOUT_DELAY;

			if (state.animating) return;
			if (!state.scrolling) {
				state.scrolling = true;
				const startEvent = new CustomEvent('scrollstart', { detail: { deltaY } });
				state.refs.layout.current!.dispatchEvent(startEvent);
			}

			if (scrollingTimeoutRef.current) clearTimeout(scrollingTimeoutRef.current);
			scrollingTimeoutRef.current = setTimeout(() => {
				state.scrolling = false;
				const endEvent = new CustomEvent('scrollfinish', { detail: { deltaY } });
				state.refs.layout.current!.dispatchEvent(endEvent);
				if (!isWheelEvent) lastTouchY.current = null;
			}, timeoutDelay);
		},
		[state],
	);
};
