import { Material } from 'three';

export const updateMaterials = (materials: Record<string, Material>) => {
  materials['light rear glass'].transparent = true;
  materials['light rear glass'].opacity = 0.1;
  materials['light rear lamp'].transparent = true;
  materials['light rear lamp'].opacity = 0.1;
};
