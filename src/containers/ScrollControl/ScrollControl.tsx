import React from 'react';

import { useSetupInitialCamera } from './hooks';
import { useAnimateCamera } from './hooks/useAnimateCamera';

export const ScrollControl: React.FC = () => {
	useSetupInitialCamera();

	useAnimateCamera();

	return null;
};
