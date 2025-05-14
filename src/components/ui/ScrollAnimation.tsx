"use client";

import { motion, useInView, useAnimation, HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  delay = 0.2,
  distance = 30,
  once = true,
  threshold = 0.1,
  ...props
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
            ease: "easeOut"
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Hover animation component
export function HoverCard({
  children,
  scale = 1.05,
  ...props
}: {
  children: ReactNode;
  scale?: number;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{
        scale,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
      {...props}
    >
      {children}
    </motion.div>
  );
}