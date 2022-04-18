import React from 'react';

import {
  TScooterSceneContext,
  IScooterSceneState,
  TScooterSceneStateModifier,
} from '../../types/scooterSceneContext';
import { SCOOTER_SCENE_INITIAL_CONTEXT } from '../../constants/scooterSceneContext';

const ScooterSceneContext = React.createContext<TScooterSceneContext>(
  SCOOTER_SCENE_INITIAL_CONTEXT
);

export const useScooterSceneState = () => React.useContext(ScooterSceneContext);

export const useScooterSceneContext = () => ScooterSceneContext;

export const useCreateScooterSceneContext = (): TScooterSceneContext => {
  const [state, setState] = React.useState<IScooterSceneState>(
    SCOOTER_SCENE_INITIAL_CONTEXT[0]
  );
  const scooterSceneStateModifier = React.useCallback(
    (transformer: TScooterSceneStateModifier) => {
      setState({ ...state, ...transformer(state) });
    },
    [state]
  );

  return React.useMemo(
    () => [state, scooterSceneStateModifier],
    [state, scooterSceneStateModifier]
  );
};

export const useModifyScooterSceneState = <T>(
  modifier: (params: T) => TScooterSceneStateModifier
): ((params: T) => void) => {
  const [_, setState] = useScooterSceneState();

  return React.useCallback(
    (params) => setState(modifier(params)),
    [setState, modifier]
  );
};
