import { MathUtils } from 'three';

import type { ScrollControlsState } from '../types';

export const updateScrollProgress = (state: ScrollControlsState) => {
	const layout = state.refs.layout.current!;
	const progress = layout.scrollTop / (layout.scrollHeight - layout.clientHeight);

	// Address precision errors to maintain decent smoothness in Safari
	state.progress = MathUtils.clamp(Math.round(progress * 1000000), 0, 1000000) / 1000000;
};
