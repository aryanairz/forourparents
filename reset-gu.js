// Reset bad romanized gu: values back to their en: equivalents
const fs = require('fs');
let src = fs.readFileSync('data/questions.ts', 'utf8');

// Match BilingualText objects and fix gu: values that don't have Gujarati script
let changes = 0;
src = src.replace(/\{(\s*)en:\s*"([^"]+)",(\s*)ml:\s*"([^"]+)",(\s*)gu:\s*"([^"]+)"(\s*)\}/g, 
  (match, s1, en, s2, ml, s3, gu, s4) => {
    const hasGujarati = /[\u0A80-\u0AFF]/.test(gu);
    if (!hasGujarati && gu !== en) {
      changes++;
      return `{${s1}en: "${en}",${s2}ml: "${ml}",${s3}gu: "${en}"${s4}}`;
    }
    return match;
  });

fs.writeFileSync('data/questions.ts', src, 'utf8');
console.log('Reset', changes, 'bad romanized values back to English');
