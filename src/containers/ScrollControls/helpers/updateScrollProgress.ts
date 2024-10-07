import type { ScrollControlsState } from '../types';

export const updateScrollProgress = (state: ScrollControlsState) => {
	const layout = state.refs.layout.current!;

	state.progress = layout.scrollTop / (layout.scrollHeight - layout.clientHeight);
};
