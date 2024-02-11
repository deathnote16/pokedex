import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWindowSize = () => {
  const [windowSizeWidth, setWindowSizeWidth] = useState<number>();
  const [windowSizeHeight, setWindowSizeHeight] = useState<number>();

  const windowSizeWidthListener = useCallback(
    debounce(() => {
      if (window)
        setWindowSizeWidth(
          window.innerWidth || document.documentElement.clientWidth
        );
    }, 250),
    []
  );

  const windowSizeHeightListener = useCallback(
    debounce(() => {
      if (window)
        setWindowSizeHeight(
          window.innerHeight || document.documentElement.clientHeight
        );
    }, 250),
    []
  );

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', windowSizeWidthListener);
      window.addEventListener('resize', windowSizeHeightListener);
    }

    return () => {
      window && window.removeEventListener('resize', windowSizeWidthListener);
      window && window.removeEventListener('resize', windowSizeHeightListener);
    };
  }, [windowSizeHeightListener, windowSizeWidthListener]);

  return {
    windowSizeWidth,
    windowSizeHeight
  };
};

export default useWindowSize;
