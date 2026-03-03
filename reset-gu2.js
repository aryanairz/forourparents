// Reset ALL gu: values that don't contain Gujarati script back to English
// This handles multi-line BilingualText objects too
const fs = require('fs');
let src = fs.readFileSync('data/questions.ts', 'utf8');

// Strategy: find each gu: "value" that doesn't have Gujarati Unicode
// Look backwards to find corresponding en: "value" and replace
const lines = src.split('\n');
let changes = 0;

for (let i = 0; i < lines.length; i++) {
  const guMatch = lines[i].match(/^(\s*gu:\s*)"([^"]+)"/);
  if (!guMatch) continue;
  
  const guVal = guMatch[2];
  const hasGujarati = /[\u0A80-\u0AFF]/.test(guVal);
  
  if (!hasGujarati && guVal.replace(/[^a-zA-Z]/g, '').length > 2) {
    // Find the corresponding en: value by looking backwards
    let enVal = null;
    for (let j = i - 1; j >= Math.max(0, i - 5); j--) {
      const enMatch = lines[j].match(/en:\s*"([^"]+)"/);
      if (enMatch) {
        enVal = enMatch[1];
        break;
      }
    }
    
    if (enVal) {
      lines[i] = lines[i].replace(/gu:\s*"[^"]*"/, `gu: "${enVal}"`);
      changes++;
    }
  }
}

fs.writeFileSync('data/questions.ts', lines.join('\n'), 'utf8');
console.log('Reset', changes, 'values back to English');
