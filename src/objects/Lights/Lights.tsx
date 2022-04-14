import React from 'react';

import { Color, Object3D, DirectionalLight } from 'three';

const DIRECTIONAL_LIGHTS_COLOR = new Color(0xfdeadd);

const getDirectionalLightsProps = () => ({
  target: new Object3D(),
  color: DIRECTIONAL_LIGHTS_COLOR,
  castShadow: true,
});

export const Lights: React.FC = () => {
  const light1 = React.useRef<DirectionalLight>();
  const light2 = React.useRef<DirectionalLight>();
  const props = getDirectionalLightsProps();

  React.useEffect(() => {
    if (light1.current && light2.current) {
      light1.current.shadow.normalBias = 0.02;
      light2.current.shadow.normalBias = 0.008;
      light1.current.shadow.camera.far = 3;
      light2.current.shadow.camera.far = 3;
      light1.current.shadow.bias = -0.01;
      light2.current.shadow.bias = -0.01;
    }
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} color={new Color('white')} />
      <directionalLight
        {...props}
        position={[-1, 1.5, -0.5]}
        ref={light1 as React.RefObject<React.ReactNode>}
        intensity={2}
        shadow-mapSize={[512, 512]}
      />
      <directionalLight
        {...props}
        position={[1, 1, 1]}
        ref={light2 as React.RefObject<React.ReactNode>}
        intensity={1.5}
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
};
