"use client"; // Required for client-side code in Next.js 13+

import { useEffect, useState, useRef } from 'react';

// Define and export the VisitorCounter component
const VisitorCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const hasIncremented = useRef(false); // Ref to track if increment has occurred

  useEffect(() => {
    // Prevent counting twice in development mode due to React strict mode
    if (typeof window !== 'undefined' && !hasIncremented.current) {
      const storedCount = localStorage.getItem('visitCount');
      const currentCount = storedCount && !isNaN(parseInt(storedCount, 10)) ? parseInt(storedCount, 10) : 0; // Get current count
      const newCount = currentCount + 1; // Increment count
      localStorage.setItem('visitCount', newCount.toString());
      setVisitCount(newCount);
      hasIncremented.current = true; // Mark as incremented
    }
  }, []);

  return (
<div className="flex flex-col items-center justify-center mt-10">
  <h2 className="text-3xl font-bold text-gray-700">Visitor Count</h2>
  <div className="mt-4 text-6xl font-extrabold text-white bg-blue-500 px-8 py-4 rounded-lg shadow-lg">
    {visitCount}
  </div>
</div>
  )
};

export default VisitorCounter;
