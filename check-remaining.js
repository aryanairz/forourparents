const fs = require('fs');
const c = fs.readFileSync('data/questions.ts', 'utf8');
const re = /gu:\s*"([^"]*)"/g;
let m;
const guRange = /[\u0A80-\u0AFF]/;
while ((m = re.exec(c)) !== null) {
  const v = m[1];
  if (v.length > 0 && !guRange.test(v)) {
    const line = c.substring(0, m.index).split('\n').length;
    console.log(`Line ${line}: [${v}]`);
  }
}
