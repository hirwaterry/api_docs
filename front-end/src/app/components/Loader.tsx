"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ isLoading = true }) => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    if (!textWrapperRef.current) return;

    // Select all paragraph elements inside the wrapper
    const titles = gsap.utils.toArray(textWrapperRef.current.querySelectorAll('p'));
    
    // Create a timeline
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.3
    });

    // Reduce the total duration for faster cycling through all phrases
    const inDuration = 0.4;
    const holdDuration = 0.3;
    const outDuration = 0.4;
    
    // First, ensure all paragraphs are hidden
    gsap.set(titles, { autoAlpha: 0 });
    
    // Then animate each paragraph sequentially
    titles.forEach((title, index) => {
      // Add a dot at the beginning of each text
      const element = title;
      const originalText = element.innerText;
      const text = "." + originalText;
      element.innerHTML = '';
      
      // Create span for each character
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        element.appendChild(span);
        return span;
      });
      
      // Sequence for this title
      tl.set(element, { autoAlpha: 1 }) // Make current element visible
        .from(chars, {
          opacity: 0,
          y: 20,
          rotateX: -45,
          stagger: 0.01, // Faster stagger
          duration: inDuration
        })
        .to({}, { duration: holdDuration }) // Hold
        .to(chars, {
          opacity: 0,
          y: -20,
          rotateX: 45,
          stagger: 0.01, // Faster stagger
          duration: outDuration,
          onComplete: () => {
            gsap.set(element, { autoAlpha: 0 });
          }
        });
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="perspective-1000 h-24 overflow-hidden" ref={textWrapperRef}>
        <p className="text-7xl text-center text-black m-0 leading-tight font-bold">Bodx</p>
        <p className="text-7xl text-center text-black m-0 leading-tight font-bold">Ui Designer</p>
        <p className="text-7xl text-center text-black m-0 leading-tight font-bold">Innovation</p>
        <p className="text-7xl text-center text-black m-0 leading-tight font-bold">Freaking</p>
        <p className="text-7xl text-center text-black m-0 leading-tight font-bold text-yellow-400">Future</p>
      </div>
    </div>
  );
};

export default Loader;