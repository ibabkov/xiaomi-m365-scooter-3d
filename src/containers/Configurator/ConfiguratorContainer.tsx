'use client';

import React from 'react';

import { Configurator } from '../../components/Configurator';
import { COLOR_PRESETS } from '../../constants/configurator';
import { useStore } from '../../hooks/useStore';

export const ConfiguratorContainer = () => {
	const { configurator, scene, actions } = useStore();
	const { bodyColor } = configurator;
	const { movingCamera } = scene;
	const handleSelect = React.useCallback((color: string) => actions.setBodyColor({ color }), [actions]);

	return <Configurator presets={COLOR_PRESETS} activeColor={bodyColor} hidden={movingCamera} onSelect={handleSelect} />;
};
