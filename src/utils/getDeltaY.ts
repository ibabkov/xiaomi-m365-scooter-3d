export const getDeltaY = (event: WheelEvent | TouchEvent, lastTouchY?: number | null) => {
	if (event instanceof WheelEvent) {
		return event.deltaY;
	}

	const clientY = Array.from(event.touches).reduce((acc, touch) => acc + touch.clientY, 0) / event.touches.length;

	return lastTouchY === null || lastTouchY === undefined ? 0 : lastTouchY - clientY;
};
