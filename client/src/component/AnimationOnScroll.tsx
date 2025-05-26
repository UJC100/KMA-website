import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom";


interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string; 
  direction?: Direction;
  distance?: number;
  scaleLevel?: number;
}


export default function AnimateOnScroll({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  direction = 'up',
  distance,
  scaleLevel
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);


 

   const getVariants = (): Record<string, any> => {
    

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: scaleLevel },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getVariants()}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}