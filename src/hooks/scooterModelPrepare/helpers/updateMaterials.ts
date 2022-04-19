import { Material } from 'three';

import { REAR_LIGHT_OPACITY } from '../../../constants/rearLight';

export const updateMaterials = (materials: Record<string, Material>) => {
  materials['light rear glass'].transparent = true;
  materials['light rear glass'].opacity = 0;
  materials['light rear reflector'].transparent = true;
  materials['light rear reflector'].opacity = 0;
  materials['light rear lamp'].transparent = true;
  materials['light rear lamp'].opacity = REAR_LIGHT_OPACITY;
};
