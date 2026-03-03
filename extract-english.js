const fs = require('fs');
const s = fs.readFileSync('data/questions.ts', 'utf8');
const re = /gu:\s*"([^"]+)"/g;
const english = [];
let m;
while ((m = re.exec(s)) !== null) {
  const v = m[1];
  if (/^[A-Z]/.test(v) && !/[\u0A80-\u0AFF]/.test(v) && v.length > 3) {
    if (!english.includes(v)) english.push(v);
  }
}
fs.writeFileSync('english-gu-texts.txt', english.join('\n'), 'utf8');
console.log('Unique English gu texts:', english.length);
