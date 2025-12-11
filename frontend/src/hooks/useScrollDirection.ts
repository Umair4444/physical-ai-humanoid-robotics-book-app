// frontend/src/hooks/useScrollDirection.ts

import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | 'none';

const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY && scrollY > 100) { // scrolling down and past a certain threshold
        setScrollDirection('down');
      } else if (scrollY < lastScrollY) { // scrolling up
        setScrollDirection('up');
      } else if (scrollY <= 100) { // at the top
        setScrollDirection('none');
      }
      setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    window.addEventListener('scroll', updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [lastScrollY]);

  return scrollDirection;
};

export default useScrollDirection;
