# Receipt Sorter

Upload a receipt text file and automatically extract the merchant, date, amount, and category using the Claude API.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Run the app:
   ```
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Paste your Anthropic API key into the field (get one at console.anthropic.com)
2. Upload a `.txt` receipt file
3. Click **Scan Receipt**

## Example receipt text file

```
Walmart Superstore
Date: June 3, 2026

Milk          $3.99
Bread         $2.49
Orange juice  $4.99

Total: $11.47
```

## Next steps to build on this

- Add image/photo upload (use Claude's vision API)
- Save receipts to localStorage so they persist between sessions
- Add filtering and sorting by category or date
- Export to CSV for budgeting
- Add a spending chart/dashboard
