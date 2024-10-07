import { create } from 'zustand';
import { Vector3 } from 'three';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { StoreState } from '../../types/store';
import { APP_TITLE } from '../../constants/app';
import { INITIAL_PAGES } from '../../constants/store';
import * as actions from '../../actions';

export const useStore = create<StoreState>()(
	immer(
		devtools(
			set => {
				return {
					page: {
						index: 0,
						contentPage: false,
						firstPage: true,
						lastPage: false,
						current: INITIAL_PAGES[0],
					},
					scene: {
						loaded: false,
						movingCamera: false,
						totalAnimationDuration: 0,
						frontLightPosition: new Vector3(),
					},
					pages: INITIAL_PAGES,
					actions: {
						moveCamera: actions.moveCameraAction(set),
						changePage: actions.changePageAction(set),
						prepareScene: actions.prepareSceneAction(set),
					},
				};
			},
			{
				name: `${APP_TITLE} state`,
			},
		),
	),
);
