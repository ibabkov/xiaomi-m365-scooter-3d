import React from 'react';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { ScrollMotivation } from '../../components/ScrollMotivation';

export const ScrollMotivationContainer: React.FC = () => {
  const [{ page, scene }] = useScooterSceneState();
  const { contentPage, lastPage } = page;
  const { movingCamera } = scene;

  const text = React.useMemo(() => {
    if (contentPage) {
      return '';
    }

    return lastPage ? 'Scroll up' : 'Scroll down';
  }, [contentPage, lastPage]);

  return (
    <ScrollMotivation hidden={movingCamera} reverse={lastPage} text={text} />
  );
};
