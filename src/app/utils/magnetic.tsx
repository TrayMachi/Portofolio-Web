import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';

// Utils for making magnetic component
interface MagneticProps {
  children: React.ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      // Store the current value of magnetic.current
      const magneticRef = magnetic.current;

      if (magneticRef) {
        magneticRef.addEventListener('mousemove', handleMouseMove);
        magneticRef.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        // Use the variable inside the cleanup function
        if (magneticRef) {
          magneticRef.removeEventListener('mousemove', handleMouseMove);
          magneticRef.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []); // No dependencies, as the effect only runs once

  return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
