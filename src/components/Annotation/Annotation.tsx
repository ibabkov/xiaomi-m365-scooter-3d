import React from 'react';

import classnames from 'classnames';
import { Html } from '@react-three/drei';

import styles from './Annotation.module.css';

export interface IAnnotationProps {
  contentPage: boolean;
}

export const Annotation: React.FC<IAnnotationProps> = (props) => {
  const { contentPage } = props;

  return (
    <Html scale={0.3} position={[0, -0.5, 0]}>
      <div
        className={classnames(
          styles['container'],
          contentPage && styles['container-hidden']
        )}
      >
        Xiaomi M365 Scooter
      </div>
    </Html>
  );
};
