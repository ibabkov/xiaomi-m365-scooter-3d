import React from 'react';

import { ScooterScene } from '../../scenes/ScooterScene';
import { Layout } from '../../components/Layout';

export const Application: React.FC = () => {
	return (
		<Layout>
			<ScooterScene />
		</Layout>
	);
};
