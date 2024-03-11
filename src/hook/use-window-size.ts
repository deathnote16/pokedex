import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

const useWindowSize = () => {
  const [windowSizeWidth, setWindowSizeWidth] = useState<number>(
    window.innerWidth || document.documentElement.clientWidth
  );
  const [windowSizeHeight, setWindowSizeHeight] = useState<number>(
    window.innerHeight || document.documentElement.clientHeight
  );

  const handleResize = useCallback(
    debounce(() => {
      setWindowSizeWidth(
        window.innerWidth || document.documentElement.clientWidth
      );
      setWindowSizeHeight(
        window.innerHeight || document.documentElement.clientHeight
      );
    }, 250),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

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
