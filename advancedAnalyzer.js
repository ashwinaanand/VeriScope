// VeriScope – Advanced Analyzer with reasons
function analyzeMessage(msg) {
  const suspicious = [
    { phrase: "forwarded as received", weight: 2 },
    { phrase: "urgent share", weight: 3 },
    { phrase: "this is not shown on news", weight: 4 },
    { phrase: "breaking news", weight: 2 },
    { phrase: "must share", weight: 3 }
  ];

  msg = msg.toLowerCase();
  let score = 0;
  let reasons = [];

  suspicious.forEach(item => {
    if (msg.includes(item.phrase)) {
      score += item.weight;
      reasons.push(`Contains phrase: "${item.phrase}"`);
    }
  });

  let status;
  if (score === 0) status = "Real";
  else if (score <= 4) status = "Uncertain";
  else status = "Fake";

  return {
    status: status,
    score: score,
    reasons: reasons
  };
}

// Example
console.log(analyzeMessage("This is breaking news, urgent share now!"));
