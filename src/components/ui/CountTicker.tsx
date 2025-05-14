"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountTickerProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function CountTicker({
  end,
  suffix = "",
  duration = 1.5,
  delay = 0,
  className = ""
}: CountTickerProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Only start animation when in view and not started yet
    if (isInView && !animationStarted) {
      // Add small delay before starting animation
      const delayTimeout = setTimeout(() => {
        setAnimationStarted(true);
        
        // Calculate animation parameters
        const startTime = performance.now();
        const endTime = startTime + duration * 1000; // Convert duration to milliseconds
        
        // Easing function for smoother animation (ease-out)
        const easeOutQuad = (t: number) => t * (2 - t);
        
        const updateCount = (currentTime: number) => {
          if (currentTime < endTime) {
            // Calculate progress (0 to 1)
            const progress = (currentTime - startTime) / (duration * 1000);
            // Apply easing to progress
            const easedProgress = easeOutQuad(Math.min(1, progress));
            // Calculate current count based on eased progress
            const currentCount = Math.floor(easedProgress * end);
            
            // Update state
            setCount(currentCount);
            // Continue animation
            requestAnimationFrame(updateCount);
          } else {
            // Animation complete, set to final value
            setCount(end);
          }
        };
        
        // Start animation
        requestAnimationFrame(updateCount);
      }, delay * 1000);
      
      return () => clearTimeout(delayTimeout);
    }
  }, [isInView, end, duration, delay, animationStarted]);
  
  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
}