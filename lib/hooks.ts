"use client";

import { useSearchParams } from "next/navigation";

/**
 * Hook to detect if the page is embedded in a mobile application
 * Checks for 'embed' or 'embedded' query parameters
 * @returns boolean - true if embedded, false otherwise
 */
export function useIsEmbedded(): boolean {
  const searchParams = useSearchParams();
  
  // Check for 'embed' or 'embedded' query parameters
  const embedParam = searchParams.get("embed");
  const embeddedParam = searchParams.get("embedded");
  
  // Return true if either parameter exists and has a truthy value
  return (
    (embedParam !== null && embedParam !== "false" && embedParam !== "0") ||
    (embeddedParam !== null && embeddedParam !== "false" && embeddedParam !== "0")
  );
}
