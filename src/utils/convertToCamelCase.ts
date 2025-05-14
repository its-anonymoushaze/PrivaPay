export function convertToCamelCase(str: string) {
  return str
    .toLowerCase() // Convert the entire string to lowercase
    .replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g,
      (match, index) =>
        index === 0 ? match.toLowerCase() : match.toUpperCase() // Convert first character to lowercase, and subsequent words' first characters to uppercase
    )
    .replace(/\s+/g, ""); // Remove all spaces
}
