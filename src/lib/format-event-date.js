/**
 * Formats a date string into Indonesian format
 * @param {string} isoString - The ISO date string to format
 * @param {('full'|'short'|'time')} [format='full'] - The format type to use
 * @param {boolean} [isJakartaTime=false] - Whether the input is already in Jakarta time
 * @returns {string} The formatted date string in Indonesian
 *
 * @example
 * // returns "Senin, 1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "full")
 *
 * // returns "1 Januari 2024"
 * formatEventDate("2024-01-01T00:00:00.000Z", "short")
 *
 * // returns "00:00"
 * formatEventDate("2024-01-01T00:00:00.000Z", "time")
 */
export const formatEventDate = (isoString, format = "full") => {
  // Add T12:00:00 to avoid timezone shifts from UTC midnight
  const date = new Date(
    isoString.includes("T") ? isoString : `${isoString}T12:00:00`,
  );

  const formats = {
    full: {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    short: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    time: {
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  if (format === "time") {
    return date.toLocaleTimeString("es-ES", formats[format]);
  }

  // Use es-ES locale directly
  let formatted = date.toLocaleDateString("es-ES", formats[format]);

  // Capitalize first letter (e.g., "domingo" -> "Domingo")
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
