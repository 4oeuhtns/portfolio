"use client"

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX-16);
      cursorY.set(e.clientY-16);
    };

    // Add the event listener
    window.addEventListener("mousemove", moveCursor);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="z-50 fixed top-0 left-0 w-[32px] h-[32px] rounded-full bg-[#eaffbc] mix-blend-difference flex justify-center items-center pointer-events-none"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};
