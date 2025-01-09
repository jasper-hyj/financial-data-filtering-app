/**
 * Formats numbers either with K, M, T suffixes or with commas for thousands separation.
 * @param value - The number or bigint to be formatted.
 * @param useSuffix - If true, formats with suffixes (K, M, T). Otherwise, formats with commas.
 * @returns The formatted number as a string.
 */
export const formatNumber = (
  value: number | bigint,
  useSuffix: boolean = true
): string => {
  const num = typeof value === "bigint" ? Number(value) : value;

  if (useSuffix) {
    if (num >= 1_000_000_000_000) {
      return `${(num / 1_000_000_000_000).toFixed(1)}T`; // Trillions
    } else if (num >= 1_000_000_000) {
      return `${(num / 1_000_000_000).toFixed(1)}B`; // Billions
    } else if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`; // Millions
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(1)}K`; // Thousands
    } else {
      return num.toString(); // Return as-is if less than 1,000
    }
  } else {
    // Format with commas
    return num.toLocaleString();
  }
};
