import { AnimationClip } from 'three';

export function getTotalAnimationDuration(animations: AnimationClip[]) {
	return animations.reduce((maxDuration, { duration }) => Math.max(maxDuration, duration), 0);
}
