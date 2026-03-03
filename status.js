// Get a clear picture of current state
const fs = require('fs');
const src = fs.readFileSync('data/questions.ts', 'utf8');

let total = 0, gujarati = 0, english = 0;
const englishValues = new Set();
const guMatch = [...src.matchAll(/gu:\s*"([^"]+)"/g)];

for (const m of guMatch) {
  total++;
  const v = m[1];
  if (/[\u0A80-\u0AFF]/.test(v)) {
    gujarati++;
  } else if (v.replace(/[^a-zA-Z]/g, '').length > 2) {
    english++;
    englishValues.add(v);
  }
}

console.log(`Total gu: values: ${total}`);
console.log(`Already in Gujarati script: ${gujarati}`);
console.log(`Still in English: ${english}`);
console.log(`Unique English strings: ${englishValues.size}`);
console.log('---');
const sorted = [...englishValues].sort();
sorted.forEach(v => console.log(v));
