import { StoreState } from '../types/store';

export type SetBodyColorOptions = {
	color: string;
};

export const setBodyColorAction = (set: (fn: (state: StoreState) => void) => void) => (params: SetBodyColorOptions) => {
	const { color } = params;

	set((state: StoreState) => {
		state.configurator.bodyColor = color;
	});
};
