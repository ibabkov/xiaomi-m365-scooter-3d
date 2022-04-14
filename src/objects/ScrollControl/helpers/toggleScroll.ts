export const toggleScroll = (container: HTMLElement, value: boolean) => {
  container.style.overflow = value ? 'hidden auto' : 'hidden';
};
