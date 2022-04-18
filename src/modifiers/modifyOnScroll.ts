import { TScooterSceneStateModifier } from '../types/scooterSceneContext';

export interface IModifyOnScrollParams {
  movingCamera: boolean;
}

export const modifyOnScroll = (
  params: IModifyOnScrollParams
): TScooterSceneStateModifier => {
  const { movingCamera } = params;

  return ({ scene }) => ({
    scene: { ...scene, movingCamera, loaded: true },
  });
};
