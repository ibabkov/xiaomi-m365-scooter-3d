import { Vector3 } from 'three';
import type { Camera } from '@react-three/fiber';

import type { ScrollControlsState } from '../types';
import type { Page } from '../../../types/page';

export const updateCameraPositions = (state: ScrollControlsState, pages: Page[], camera: Camera) => {
	const { progress, pageIndex } = state;
	const nextIndex = pageIndex === pages.length - 1 ? 0 : pageIndex + 1; // Prevent going beyond the last page
	const page = pages[pageIndex];
	const nextPage = pages[nextIndex];
	const cameraPosition = new Vector3();
	const targetPosition = new Vector3();
	cameraPosition.lerpVectors(page.camera, nextPage.camera, progress);
	targetPosition.lerpVectors(page.target, nextPage.target, progress);

	camera.position.copy(cameraPosition);
	camera.lookAt(targetPosition);
};
