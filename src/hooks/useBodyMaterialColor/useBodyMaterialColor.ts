import React from 'react';

import { Material, MeshStandardMaterial } from 'three';

import { useStore } from '../useStore';

const BODY_MATERIAL_NAMES = ['body metal', 'body plastic black'];

/**
 * Tints the scooter's painted body shell with the configurator's selected color.
 */
export const useBodyMaterialColor = (materials: Record<string, Material>) => {
	const { configurator } = useStore();
	const { bodyColor } = configurator;

	React.useEffect(() => {
		BODY_MATERIAL_NAMES.forEach(name => {
			const material = materials[name] as MeshStandardMaterial | undefined;

			if (!material) return;

			material.color.set(bodyColor);
		});
	}, [materials, bodyColor]);
};
