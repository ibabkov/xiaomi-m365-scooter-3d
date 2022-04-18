export const computeNewPageByScroll = (scroll: number, pagesLength: number) => {
  const offset = Math.min(Math.abs(scroll), 1);

  return Math.round(offset * (pagesLength - 1));
};
