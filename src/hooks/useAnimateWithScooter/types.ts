export type OnAnimateOptions = {
	/** Animation progress from 0 to 1 */
	progress: number;
	/** Animation duration in milliseconds */
	duration: number;
	/** Current animation part */
	animationPart: number;
	/** Total animation parts */
	totalAnimationParts: number;
};

export type AnimateWithScooterParams = {
	/** Total gltf model animation duration */
	totalAnimationDuration: number;
	/** The number of animation iterations to complete a full animation */
	totalAnimationParts?: number;
	/** Called on every frame */
	onAnimate(options: OnAnimateOptions): number;
};
