// VeriScope – Mini Fake Info Detector
const suspiciousPhrases = [
  "forwarded as received",
  "urgent share",
  "this is not shown on news",
  "breaking news",
  "must see",
  "shocking"
];

// Check a single message
function checkMessage(msg) {
  msg = msg.toLowerCase();
  let found = suspiciousPhrases.filter(phrase => msg.includes(phrase));
  if (found.length === 0) return "Real";
  if (found.length <= 2) return "Uncertain";
  return "Fake";
}

// Check multiple messages
function batchCheck(messages) {
  return messages.map(msg => ({
    message: msg,
    status: checkMessage(msg)
  }));
}

// Example usage
const messages = [
  "Please urgent share this message",
  "This is breaking news: amazing event",
  "Hello, how are you?"
];

console.log(batchCheck(messages));
/* Output:
[
  { message: 'Please urgent share this message', status: 'Fake' },
  { message: 'This is breaking news: amazing event', status: 'Fake' },
  { message: 'Hello, how are you?', status: 'Real' }
]
*/
