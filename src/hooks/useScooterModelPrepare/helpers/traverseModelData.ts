import { Mesh, Vector3 } from 'three';
import { GLTF } from 'three-stdlib';

import { IModelPrepareData } from '../types';
import { Page, PagePositionType } from '../../../types/page';
import { getFrontLightPosition } from './getFrontLightPosition';
import { updateMaterials } from './updateMaterials';

export const traverseModelData = (model: GLTF, initialPages: Page[]) => (): IModelPrepareData => {
	const { scene, materials } = model;
	const pages: Page[] = [...initialPages];
	let frontLightPosition = new Vector3();

	scene.traverse(node => {
		const { name, position } = node;

		if (name.startsWith('Target_') || name.startsWith('Camera_')) {
			const [t, i] = name.split('_') as [string, number];
			const pagePositionType = t.toLowerCase() as PagePositionType;

			pages[i][pagePositionType] = position;

			frontLightPosition = getFrontLightPosition(node, frontLightPosition);
			node.visible = false;
		} else if (node instanceof Mesh) {
			node.castShadow = true;
			node.receiveShadow = true;
		}
	});
	updateMaterials(materials);

	return { pages, frontLightPosition, model };
};
