import React, { useState, useEffect } from 'react';
import useIsMounted from './UseIsMounted';  // Correct relative path for your file structure

function MyComponent() {
  const isMounted = useIsMounted();  // Use the custom hook to track component mount state
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate an async fetch operation
    const fetchData = setTimeout(() => {
      if (isMounted) {
        setData('Fetched Data');
      }
    }, 2000);

    return () => clearTimeout(fetchData);  // Cleanup on unmount
  }, [isMounted]);

  return (
    <div>
      {isMounted ? (data ? data : 'Loading...') : 'Component is unmounted!'}
    </div>
  );
}

export default MyComponent;
