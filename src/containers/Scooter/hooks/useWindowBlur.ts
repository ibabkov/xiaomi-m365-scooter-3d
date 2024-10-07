import React from 'react';

import { useThree } from '@react-three/fiber';

export const useWindowBlur = (stopScooterAnimations: () => void) => {
	const { gl } = useThree();

	React.useEffect(() => {
		const handleFocus = () => {
			window.location.reload();
		};

		const handleBlur = () => {
			stopScooterAnimations();
			gl.setAnimationLoop(null);
		};

		// Add event listeners
		window.addEventListener('focus', handleFocus);
		window.addEventListener('blur', handleBlur);

		// Clean up event listeners
		return () => {
			window.removeEventListener('focus', handleFocus);
			window.removeEventListener('blur', handleBlur);
		};
	}, [gl, stopScooterAnimations]);
};
