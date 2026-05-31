import React from 'react';

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = React.useState(() => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false));

	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const handleChange = (event: MediaQueryListEvent) => setMatches(event.matches);

		setMatches(mediaQueryList.matches);
		mediaQueryList.addEventListener('change', handleChange);

		return () => mediaQueryList.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
};
