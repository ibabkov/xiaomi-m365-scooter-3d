import React from 'react';

import { useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import { IScrollControlsState } from '../../types/scrollControls';
import { useSetupInitialCamera } from './hooks';
import { IPage } from '../../types/page';
import { animateCamera, toggleScroll, computeNewPageByScroll } from './helpers';

export interface IScrollControlProps {
  pages: IPage[];
  scrolling: boolean;
  pageIndex: number;
  onScroll: (pageIndex: number, scrolling: boolean) => void;
}

export const ScrollControl: React.FC<IScrollControlProps> = (props) => {
  const { pages, pageIndex, onScroll, scrolling } = props;
  const scrollData = useScroll() as IScrollControlsState;
  const { fixed, el } = scrollData;
  const { camera } = useThree();

  useSetupInitialCamera(camera, pages[0]);

  const handleToggleScroll = React.useCallback(
    (value: boolean, pageIndex: number) => {
      setTimeout(() => toggleScroll(el, value), 0);
      onScroll(pageIndex, value);
    },
    [fixed]
  );

  useFrame(() => {
    const newPageIndex = computeNewPageByScroll(
      Math.min(Math.abs(scrollData.offset), 1),
      pages.length
    );

    if (scrolling && pageIndex !== newPageIndex) {
      animateCamera({
        camera,
        page: pages[pageIndex],
        newPage: pages[newPageIndex],
        onStart: () => handleToggleScroll(false, newPageIndex),
        onComplete: () => handleToggleScroll(true, newPageIndex),
      });
    }
  });

  return null;
};
