// VeriScope – Clean and validate input text
function preprocessText(msg) {
  if (!msg || typeof msg !== "string") {
    return { error: "Invalid input" };
  }

  // Remove extra spaces
  let cleaned = msg.trim().replace(/\s+/g, " ");

  // Remove special characters (basic cleaning)
  cleaned = cleaned.replace(/[^\w\s]/gi, "");

  // Convert to lowercase
  cleaned = cleaned.toLowerCase();

  return {
    original: msg,
    cleaned: cleaned,
    length: cleaned.length
  };
}

// Example
console.log(preprocessText("  URGENT!!! Share this now!!!  "));
