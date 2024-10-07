import type { ScrollControlsState } from '../types';
import type { Page } from '../../../types/page';

export const updateScrollBar = (state: ScrollControlsState, pages: Page[]) => {
	const { progress, pageIndex } = state;

	if (!state.refs.bar.current) return;

	let newBarTop = (pageIndex + progress) * 100;

	if (newBarTop > (pages.length - 1) * 100) {
		newBarTop = (1 - progress) * (pages.length - 1) * 100;
	}

	state.refs.bar.current.style.transform = `translateY(${newBarTop}%)`;
};
