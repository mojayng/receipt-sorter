import { useState } from 'react';
import { parseReceipt } from './parseReceipt';
import './App.css';

function App() {
  const [fileContent, setFileContent] = useState(null);
  const [fileName, setFileName] = useState('');
  const [receipts, setReceipts] = useState([]);
  const [error, setError] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFileContent(reader.result.trim());
      setFileName(file.name);
      setError('');
    };
    reader.onerror = () => setError('Could not read file.');
  };

  const scanReceipt = () => {
    if (!fileContent) { setError('Please upload a receipt file first.'); return; }
    const parsed = parseReceipt(fileContent);
    setReceipts((prev) => [{ ...parsed, raw: fileContent, id: Date.now() }, ...prev]);
    setFileContent(null);
    setFileName('');
  };

  return (
    <div className="app">
      <h1>Receipt Sorter</h1>
      <p className="subtitle">Upload a receipt text file to extract and sort the details</p>

      <div className="upload-section">
        <input type="file" accept=".txt" onChange={handleFileUpload} id="file-input" />
        <label htmlFor="file-input" className="upload-label">
          {fileName ? `📄 ${fileName}` : '+ Upload receipt (.txt)'}
        </label>
      </div>

      {error && <div className="error">{error}</div>}

      <button className="scan-btn" onClick={scanReceipt} disabled={!fileContent}>
        Scan Receipt
      </button>

      {receipts.length > 0 && (
        <div className="receipts">
          <h2>Scanned Receipts ({receipts.length})</h2>
          {receipts.map((r) => (
            <div key={r.id} className="receipt-card">
              <div className="receipt-top">
                <span className="merchant">{r.merchant}</span>
                <span className="amount">{r.amount || '—'}</span>
              </div>
              <div className="receipt-meta">
                {r.date && <span className="badge badge-date">{r.date}</span>}
                <span className="badge badge-category">{r.category}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
