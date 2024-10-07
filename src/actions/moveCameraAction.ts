import { StoreState } from '../types/store';

export type MoveCameraOptions = {
	movingCamera: boolean;
};

export const moveCameraAction = (set: (fn: (state: StoreState) => void) => void) => (params: MoveCameraOptions) => {
	const { movingCamera } = params;

	set(state => {
		state.scene.movingCamera = movingCamera;
	});
};
