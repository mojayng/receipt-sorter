export function parseReceipt(text) {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  // --- Merchant: first non-empty line ---
  const merchant = lines[0] || 'Unknown';

  // --- Date: look for common date patterns ---
  const datePatterns = [
    /\b(\w+ \d{1,2},?\s*\d{4})\b/i,         // June 4, 2026
    /\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})\b/, // 06/04/2026 or 6-4-26
    /\b(\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2})\b/,   // 2026-06-04
  ];
  let date = null;
  for (const pattern of datePatterns) {
    const match = text.match(pattern);
    if (match) { date = match[1]; break; }
  }

  // --- Amount: look for Total line ---
  let amount = null;
  const totalMatch = text.match(/total[:\s]*\$?([\d,]+\.\d{2})/i);
  if (totalMatch) {
    amount = '$' + totalMatch[1];
  } else {
    // fallback: find the largest dollar amount in the text
    const allAmounts = [...text.matchAll(/\$?([\d,]+\.\d{2})/g)]
      .map(m => parseFloat(m[1].replace(',', '')));
    if (allAmounts.length) {
      amount = '$' + Math.max(...allAmounts).toFixed(2);
    }
  }

  // --- Category: keyword matching ---
  const lower = text.toLowerCase();
  let category = 'Other';
  if (/walmart|grocery|superstore|food|produce|bakery|safeway|kroger|costco/.test(lower)) category = 'Groceries';
  else if (/restaurant|cafe|coffee|burger|pizza|sushi|diner|mcdonald|starbucks|subway/.test(lower)) category = 'Dining';
  else if (/airline|hotel|uber|lyft|airbnb|taxi|flight|travel|parking/.test(lower)) category = 'Travel';
  else if (/amazon|walmart|target|best buy|shopping|store|mall/.test(lower)) category = 'Shopping';
  else if (/netflix|cinema|movie|spotify|game|entertainment/.test(lower)) category = 'Entertainment';
  else if (/pharmacy|doctor|hospital|clinic|health|medical/.test(lower)) category = 'Health';
  else if (/hydro|electric|gas|water|internet|phone|utility/.test(lower)) category = 'Utilities';

  return { merchant, date, amount, category };
}
