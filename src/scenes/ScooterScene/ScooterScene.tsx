import React from 'react';

import { ScrollControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { update as tweenUpdate } from '@tweenjs/tween.js';

import { ScrollControl } from '../../objects/ScrollControl';
import { Scooter } from '../../objects/Scooter';
import { Lights } from '../../objects/Lights';
import { useScooterModelAnimate } from '../../hooks/useScooterModelAnimate';
import { useScooterModelPrepare } from '../../hooks/useScooterModelPrepare';

export interface IScooterSceneProps {
  pageIndex: number;
  scrolling: boolean;
  onScroll: (pageIndex: number, scrolling: boolean) => void;
  onLoad: () => void;
}

export const ScooterScene: React.FC<IScooterSceneProps> = (props) => {
  const { pages, frontLightPosition, model } = useScooterModelPrepare();
  const { pageIndex, onScroll, onLoad, scrolling } = props;
  const { scene } = model;
  const contentPage = Boolean(pageIndex && pageIndex !== pages.length - 1);

  React.useEffect(onLoad, []);
  useFrame(() => tweenUpdate());
  useScooterModelAnimate(model);

  return (
    <group>
      <Lights />
      <ScrollControls
        style={{ scrollBehavior: 'smooth' }}
        distance={1.5}
        damping={10}
        eps={0.1}
        pages={pages.length}
      >
        <ScrollControl
          pageIndex={pageIndex}
          pages={pages}
          onScroll={onScroll}
          scrolling={scrolling}
        />
        <Scooter
          scene={scene}
          contentPage={contentPage}
          frontLightPosition={frontLightPosition}
        />
      </ScrollControls>
    </group>
  );
};
