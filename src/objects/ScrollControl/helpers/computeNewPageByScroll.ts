export const computeNewPageByScroll = (scroll: number, pagesLength: number) => {
  return Math.round(scroll * (pagesLength - 1));
};
