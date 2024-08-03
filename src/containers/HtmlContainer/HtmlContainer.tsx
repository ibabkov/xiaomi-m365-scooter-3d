import React from 'react';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';

export interface IHtmlContainerProps {
	children: React.ReactNode;
}

const HtmlContainerComponent: React.FC<IHtmlContainerProps> = props => {
	const [{ scene }] = useScooterSceneState();
	const { loaded } = scene;
	const { children } = props;

	if (!loaded) {
		return null;
	}

	return <>{children}</>;
};

export const HtmlContainer = React.memo(HtmlContainerComponent);
