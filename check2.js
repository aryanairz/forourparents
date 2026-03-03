const fs = require('fs');
const src = fs.readFileSync('data/questions.ts', 'utf8');

// Find all gu: values
const matches = [...src.matchAll(/gu:\s*"([^"]+)"/g)];
const englishOnes = matches
  .map(m => m[1])
  .filter(v => {
    // Has letters, no Gujarati script
    const hasEnglish = v.replace(/[^a-zA-Z]/g, '').length > 3;
    const hasGujarati = /[\u0A80-\u0AFF]/.test(v);
    return hasEnglish && !hasGujarati;
  });

const unique = [...new Set(englishOnes)].sort();
console.log('Total remaining English-only gu: values:', unique.length);
unique.forEach(v => console.log(v));
