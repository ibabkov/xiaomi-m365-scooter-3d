import React from 'react';

import { Group } from '@tweenjs/tween.js';

export type ScrollControlsState = {
	progress: number;
	pageIndex: number;
	animating: boolean;
	scrolling: boolean;
	tweenGroup: Group | null;
	refs: { layout: React.MutableRefObject<HTMLDivElement | null>; bar: React.MutableRefObject<HTMLDivElement | null> };
	timeouts: { animation: ReturnType<typeof setTimeout> | null };
};
