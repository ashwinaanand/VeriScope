// VeriScope – Highlight suspicious phrases
function highlightSuspicious(msg) {
  const suspicious = ["forwarded as received", "urgent share", "this is not shown on news", "breaking news"];
  let highlighted = msg;
  
  suspicious.forEach(phrase => {
    const regex = new RegExp(`(${phrase})`, "gi");
    highlighted = highlighted.replace(regex, "**$1**"); // highlights phrase
  });
  
  return highlighted;
}

// Example usage
console.log(highlightSuspicious("Please urgent share this message. This is breaking news!"));
/* Output:
Please **urgent share** this message. This is **breaking news**!
*/
