import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

const useWindowSize = () => {
  const [windowSizeWidth, setWindowSizeWidth] = useState(0);
  const [windowSizeHeight, setWindowSizeHeight] = useState(0);

  const updateWindowDimensions = () => {
    setWindowSizeWidth(window.innerWidth);
    setWindowSizeHeight(window.innerHeight);
  };

  useEffect(() => {
    // Initial call to set dimensions on load
    updateWindowDimensions();

    // Event listener to update dimensions on window resize
    window.addEventListener('resize', updateWindowDimensions);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []);

  const isMobile = useMemo(() => {
    return windowSizeWidth <= 800;
  }, [windowSizeWidth]);

  return {
    windowSizeWidth,
    windowSizeHeight,
    isMobile
  };
};

export default useWindowSize;
