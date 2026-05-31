import { Color, Material, MeshStandardMaterial } from 'three';

import { REAR_LIGHT_EMISSIVE_COLOR, REAR_LIGHT_MIN_EMISSIVE, REAR_LIGHT_OPACITY } from '../../../constants/rearLight';

export const updateMaterials = (materials: Record<string, Material>) => {
	const rearLamp = materials['light rear lamp'] as MeshStandardMaterial;
	const rearGlass = materials['light rear glass'] as MeshStandardMaterial;
	const rearReflector = materials['light rear reflector'] as MeshStandardMaterial;

	rearGlass.transparent = true;
	rearGlass.opacity = 0;
	rearReflector.transparent = true;
	rearReflector.opacity = 0;
	rearLamp.transparent = true;
	rearLamp.opacity = REAR_LIGHT_OPACITY;
	rearLamp.emissive = new Color(REAR_LIGHT_EMISSIVE_COLOR);
	rearLamp.emissiveIntensity = REAR_LIGHT_MIN_EMISSIVE;
};
