import React from 'react';

import { useStore } from '../../hooks/useStore';

export type HtmlContainerProps = {
	children: React.ReactNode;
};

const HtmlContainerComponent: React.FC<HtmlContainerProps> = props => {
	const { scene } = useStore();
	const { loaded } = scene;
	const { children } = props;

	if (!loaded) {
		return null;
	}

	return <>{children}</>;
};

export const HtmlContainer = React.memo(HtmlContainerComponent);
