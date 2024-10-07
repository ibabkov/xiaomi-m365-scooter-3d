import React from 'react';

import { useThree } from '@react-three/fiber';

import { useStore } from '../../../hooks/useStore';

export const useSetupInitialCamera = () => {
	const { camera } = useThree();
	const { pages } = useStore();

	React.useLayoutEffect(() => {
		const firstPage = pages[0];
		const { x, y, z } = firstPage.camera;

		camera.position.x = x;
		camera.position.y = y;
		camera.position.z = z;
		camera.lookAt(firstPage.target);
	}, [pages]);
};
