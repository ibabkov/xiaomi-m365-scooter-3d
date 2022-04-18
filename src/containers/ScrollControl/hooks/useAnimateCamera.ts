import React from 'react';

import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

import {
  useModifyScooterSceneState,
  useScooterSceneState,
} from '../../../hooks/scooterSceneContext';
import {
  animateCamera,
  computeNewPageByScroll,
  toggleScroll,
} from '../helpers';
import { modifyOnScroll } from '../../../modifiers/modifyOnScroll';
import { modifyOnScrollComplete } from '../../../modifiers/modifyOnScrollComplete';
import { IScrollControlsState } from '../../../types/scrollControls';

export const useAnimateCamera = () => {
  const { camera } = useThree();
  const [{ page, scene, pages }] = useScooterSceneState();
  const scrollData = useScroll() as IScrollControlsState;
  const onScroll = useModifyScooterSceneState(modifyOnScroll);
  const onScrollComplete = useModifyScooterSceneState(modifyOnScrollComplete);
  const { index: pageIndex } = page;
  const { movingCamera } = scene;
  const { el: container } = scrollData;

  /* ======================== SCROLL START HANDLER ======================== */
  const handleScrollStart = React.useCallback(() => {
    const movingCamera = true;

    toggleScroll(container, movingCamera);
    onScroll({ movingCamera });
  }, [container, onScroll]);

  /* ======================== SCROLL COMPLETE HANDLER ======================== */
  const handleScrollComplete = React.useCallback(
    (pageIndex: number) => {
      const movingCamera = false;

      toggleScroll(container, movingCamera);
      onScroll({ movingCamera });
      onScrollComplete({ pageIndex, movingCamera });
    },
    [container, onScroll, onScrollComplete]
  );

  /* ======================== CAMERA ANIMATION ======================== */
  useFrame(() => {
    const newPageIndex = computeNewPageByScroll(
      scrollData.offset,
      pages.length
    );
    const animate = !movingCamera && pageIndex !== newPageIndex;

    if (animate) {
      animateCamera({
        camera,
        page: pages[pageIndex],
        newPage: pages[newPageIndex],
        onStart: handleScrollStart,
        onComplete: () => handleScrollComplete(newPageIndex),
      });
    }
  });
};
