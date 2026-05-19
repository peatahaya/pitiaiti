"use client";

import { useEffect, useState } from "react";

/**
 * Orchestrates the page entrance animation sequence.
 * Returns flags for each phase of the entrance.
 */
export function useEntrance() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    // Logo appears (2s), then breathes/pauses until 4.5s, then preloader fades
    const preloaderTimer = setTimeout(() => {
      setPreloaderDone(true);
    }, 4500);

    // After preloader fades (1.0s exit), page content starts entrance
    const pageTimer = setTimeout(() => {
      setPageReady(true);
    }, 5500);

    return () => {
      clearTimeout(preloaderTimer);
      clearTimeout(pageTimer);
    };
  }, []);

  return { preloaderDone, pageReady };
}
