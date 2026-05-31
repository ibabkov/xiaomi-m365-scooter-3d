import React from 'react';

import classnames from 'classnames';

import styles from './Configurator.module.css';
import { ColorPreset } from '../../types/configurator';

export type ConfiguratorProps = {
	presets: ColorPreset[];
	activeColor: string;
	hidden?: boolean;
	onSelect: (color: string) => void;
};

const ConfiguratorComponent = (props: ConfiguratorProps) => {
	const { presets, activeColor, hidden, onSelect } = props;

	return (
		<div className={classnames(styles['container'], hidden && styles['container-hidden'])}>
			<span className={styles['title']}>Body color</span>
			<ul className={styles['list']}>
				{presets.map(preset => {
					const active = preset.color.toLowerCase() === activeColor.toLowerCase();

					return (
						<li key={preset.id} className={styles['item']}>
							<button
								type="button"
								aria-label={preset.label}
								aria-pressed={active}
								title={preset.label}
								className={classnames(styles['swatch'], active && styles['swatch-active'])}
								style={{ backgroundColor: preset.color }}
								onClick={() => onSelect(preset.color)}
							/>
							<span className={styles['label']}>{preset.label}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const Configurator = React.memo(ConfiguratorComponent);
