import React from 'react';

import { useStore } from '../../hooks/useStore';

export interface IHtmlContainerProps {
	children: React.ReactNode;
}

const HtmlContainerComponent: React.FC<IHtmlContainerProps> = props => {
	const { scene } = useStore();
	const { loaded } = scene;
	const { children } = props;

	if (!loaded) {
		return null;
	}

	return <>{children}</>;
};

export const HtmlContainer = React.memo(HtmlContainerComponent);
