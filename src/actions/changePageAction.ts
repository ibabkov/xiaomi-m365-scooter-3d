import { StoreState } from '../types/store';

export type ChangePageOptions = {
	pageIndex: number;
};

export const changePageAction = (set: (fn: (state: StoreState) => void) => void) => (params: ChangePageOptions) => {
	const { pageIndex } = params;

	set((state: StoreState) => {
		const firstPage = pageIndex === 0;
		const lastPage = pageIndex === state.pages.length - 1;
		const contentPage = !firstPage;

		state.page = {
			index: pageIndex,
			contentPage,
			firstPage,
			lastPage,
			current: state.pages[pageIndex],
		};
	});
};
