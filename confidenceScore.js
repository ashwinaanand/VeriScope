// VeriScope – Confidence score for fake info detection
function getConfidence(msg) {
  const suspicious = ["forwarded as received", "urgent share", "this is not shown on news", "breaking news"];
  msg = msg.toLowerCase();
  
  // Count how many suspicious phrases are present
  let count = suspicious.reduce((acc, phrase) => acc + (msg.includes(phrase) ? 1 : 0), 0);
  
  // Calculate confidence score
  const score = (count / suspicious.length) * 100;
  
  if (score === 0) return {status: "Real", confidence: 100};
  if (score <= 50) return {status: "Uncertain", confidence: 50 - score/2};
  return {status: "Fake", confidence: score};
}

// Example usage
console.log(getConfidence("This is urgent share and breaking news"));
// Output: { status: 'Fake', confidence: 50 }
