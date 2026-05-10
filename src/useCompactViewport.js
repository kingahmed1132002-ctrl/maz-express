import { useState, useEffect } from "react";

/**
 * Returns true when the viewport width is narrow enough that
 * heavy scroll-driven animations should be disabled (≤ 768 px).
 */
export default function useCompactViewport(breakpoint = 768) {
  const [isCompact, setIsCompact] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setIsCompact(e.matches);
    mq.addEventListener("change", handler);
    setIsCompact(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isCompact;
}
