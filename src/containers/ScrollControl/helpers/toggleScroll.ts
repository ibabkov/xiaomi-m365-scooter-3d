export const toggleScroll = (container: HTMLElement, movingCamera: boolean) => {
  container.style.overflow = movingCamera ? 'hidden' : 'hidden auto';
};
