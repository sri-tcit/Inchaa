"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the page is embedded in a mobile application
 * Checks for 'embed' or 'embedded' query parameters
 * @returns boolean - true if embedded, false otherwise
 */
export function useIsEmbedded(): boolean {
  const [isEmbedded, setIsEmbedded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const embedParam = params.get("embed");
      const embeddedParam = params.get("embedded");
      
      const embedded = (
        (embedParam !== null && embedParam !== "false" && embedParam !== "0") ||
        (embeddedParam !== null && embeddedParam !== "false" && embeddedParam !== "0")
      );
      
      setIsEmbedded(embedded);
    }
  }, []);

  return isEmbedded;
}
