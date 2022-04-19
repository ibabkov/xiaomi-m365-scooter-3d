import React from 'react';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { ScrollMotivation } from '../../components/ScrollMotivation';

export const ScrollMotivationContainer: React.FC = () => {
  const [{ page, scene }] = useScooterSceneState();
  const { firstPage } = page;
  const { movingCamera } = scene;

  const text = React.useMemo(() => {
    return firstPage ? 'Scroll' : '';
  }, [firstPage]);

  return (
    <ScrollMotivation hidden={movingCamera}text={text} />
  );
};
