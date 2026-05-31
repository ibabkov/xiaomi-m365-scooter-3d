import { ColorPreset } from '../types/configurator';

export const COLOR_PRESETS: ColorPreset[] = [
	{ id: 'black', label: 'Stealth Black', color: '#1a1a1a' },
	{ id: 'white', label: 'Pearl White', color: '#e8e8e8' },
	{ id: 'red', label: 'Racing Red', color: '#b1221f' },
	{ id: 'blue', label: 'Ocean Blue', color: '#0b2d5a' },
	{ id: 'gold', label: 'Champagne Gold', color: '#b48a3c' },
];

export const DEFAULT_BODY_COLOR = COLOR_PRESETS[0].color;
