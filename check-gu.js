const fs = require('fs');
const s = fs.readFileSync('data/questions.ts', 'utf8');
const matches = [...s.matchAll(/gu:\s*"([^"]+)"/g)];
let engCount = 0;
for (const m of matches) {
  const v = m[1];
  // Check if value is mostly ASCII (English) - no Gujarati chars
  if (/^[A-Z]/.test(v) && !/[\u0A80-\u0AFF]/.test(v) && v.length > 3) {
    engCount++;
    if (engCount <= 20) console.log('English gu:', v.substring(0, 100));
  }
}
console.log('Total English-only gu values:', engCount);
