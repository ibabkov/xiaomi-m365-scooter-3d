import { Vector3 } from 'three';

import { IPage } from './page';

export interface IScooterPageData {
  index: number;
  contentPage: boolean;
  firstPage: boolean;
  lastPage: boolean;
  current: IPage;
}

export interface IScooterSceneData {
  loaded: boolean;
  movingCamera: boolean;
  totalAnimationDuration: number;
  frontLightPosition: Vector3;
}

export interface IScooterSceneState {
  page: IScooterPageData;
  scene: IScooterSceneData;
  pages: IPage[];
}

export type TScooterSceneStateModifier = (
  state: IScooterSceneState
) => Partial<IScooterSceneState>;

export type TScooterSceneSetState = (
  modifier: TScooterSceneStateModifier
) => void;

export type TScooterSceneContext = [IScooterSceneState, TScooterSceneSetState];
