import { ScrollControlsState } from '@react-three/drei';

export interface IScrollControlsState extends ScrollControlsState {
	scroll: { current: number };
}
