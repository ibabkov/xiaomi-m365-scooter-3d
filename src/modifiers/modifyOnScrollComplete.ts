import { TScooterSceneStateModifier } from '../types/scooterSceneContext';

export interface IModifyOnScrollCompleteParams {
	pageIndex: number;
	movingCamera: boolean;
}

export const modifyOnScrollComplete = (params: IModifyOnScrollCompleteParams): TScooterSceneStateModifier => {
	const { movingCamera, pageIndex } = params;

	return ({ pages }) => {
		const firstPage = pageIndex === 0;
		const lastPage = pageIndex === pages.length - 1;
		const contentPage = !firstPage;

		if (movingCamera) {
			return {};
		}

		return {
			page: {
				index: pageIndex,
				contentPage,
				firstPage,
				lastPage,
				current: pages[pageIndex],
			},
		};
	};
};
