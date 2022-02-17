import { useEffect } from 'react';

const useResizeEventListener = (): void => {
  useEffect(() => {
    const onResize = () => {
      const viewportHeight = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--viewport-height', `${viewportHeight}px`);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);
};

export default useResizeEventListener;
