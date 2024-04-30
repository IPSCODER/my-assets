import { useState, useEffect } from 'react';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    // Initial check
    handleChange();

    // Listen for changes in the media query
    mediaQuery.addListener(handleChange);

    // Cleanup function to remove the listener when component unmounts
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;


