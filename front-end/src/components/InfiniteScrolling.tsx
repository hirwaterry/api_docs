"use client"
import { useState, useEffect } from 'react';

const InfiniteScrolling = () => {
  const [position, setPosition] = useState(0);
  const text = "#BODX on the top wlh!";
  
  // Calculate how many repetitions we need to ensure no gap
  const baseText = text.repeat(10);
  
  useEffect(() => {
    const animate = () => {
      setPosition(prevPosition => {
        // Reset position when text has moved enough to ensure seamless transition
        if (prevPosition <= -100) {
          return 0;
        }
        return prevPosition - 0.5; // Speed of animation
      });
    };
    
    const animationId = requestAnimationFrame(animate);
    const interval = setInterval(animate, 20); // Update interval
    
    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black">
      <div 
        className="whitespace-nowrap"
        style={{ transform: `translateX(${position}px)` }}
      >
        <h1 className="text-6xl font-bold pt-8 pb-8 inline-block text-white">
          {baseText}
        </h1>
      </div>
    </div>
  );
};

export default InfiniteScrolling;