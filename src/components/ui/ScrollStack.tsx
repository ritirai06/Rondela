import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollStack = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative w-full flex flex-col pb-[20vh] ${className}`}>
      {children}
    </div>
  );
};

interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export const ScrollStackItem = ({ children, index, className = "" }: ScrollStackItemProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track this element's scroll progress relative to the viewport.
  // "start start" means when the top hits the top of the viewport.
  // "start -100%" means when the top is 100% of the viewport height ABOVE the top.
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "start -100%"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  const topOffset = `calc(15vh + ${index * 15}px)`; 

  return (
    <motion.div 
      ref={targetRef} 
      className={`sticky w-full origin-top ${className}`}
      style={{ 
        top: topOffset, 
        scale,
        opacity,
      }}
    >
      {children}
    </motion.div>
  );
};
