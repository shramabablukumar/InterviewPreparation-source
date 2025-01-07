// hooks/useIsMounted.js
import { useState, useEffect } from 'react';

function useIsMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
}

export default useIsMounted;
