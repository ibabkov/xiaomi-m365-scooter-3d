import React from 'react';

import { ACESFilmicToneMapping, PCFSoftShadowMap, sRGBEncoding } from 'three';
import { Canvas, RootState } from '@react-three/fiber';

import { Layout } from '../../components/Layout';
import { CanvasFallback } from '../../components/CanvasFallback';
import { ScooterScene } from '../../scenes/ScooterScene';
import { ScrollDown } from '../../components/ScrollDown';
import { Description } from '../../components/Description';
import { HtmlComponent } from '../HtmlComponent';

export const Application: React.FC = () => {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [scrolling, setScrolling] = React.useState(true);
  const handleLoaded = React.useCallback(() => setLoaded(true), []);
  const handleScroll = React.useCallback(
    (pageIndex: number, scrolling: boolean) => {
      setScrolling(scrolling);
      setPageIndex(pageIndex);

      if (!scrolled) {
        setScrolled(true);
      }
    },
    [scrolled]
  );
  const handleCreate = React.useCallback(({ gl: renderer }: RootState) => {
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.outputEncoding = sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
  }, []);

  return (
    <Layout>
      <React.Suspense fallback={<CanvasFallback />}>
        <>
          <Canvas
            dpr={[1, 3]}
            camera={{ fov: 45 }}
            onCreated={handleCreate}
            shadows={{ enabled: true, type: PCFSoftShadowMap }}
          >
            <ScooterScene
              onLoad={handleLoaded}
              pageIndex={pageIndex}
              onScroll={handleScroll}
              scrolling={scrolling}
            />
          </Canvas>
          <HtmlComponent dataLoaded={loaded}>
            <Description pageIndex={pageIndex} scrolling={scrolling} />
            <ScrollDown hidden={scrolled} />
          </HtmlComponent>
        </>
      </React.Suspense>
    </Layout>
  );
};
