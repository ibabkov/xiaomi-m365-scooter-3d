export function getNewPageIndex(pageIndex: number, pagesLength: number) {
	const totalPages = pagesLength - 1;

	return pageIndex === totalPages ? 0 : pageIndex + 1;
}
