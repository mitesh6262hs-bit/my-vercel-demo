import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>📱 Phone Demo</h1>
      <p style={{ fontSize: '50px' }}>{count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: '15px 40px', fontSize: '20px', background: 'black', color: 'white', border: 'none', borderRadius: '50px' }}
      >
        Click Kar
      </button>
      <p style={{ marginTop: '30px' }}>Vercel pe deploy ho gaya! 🚀</p>
    </div>
  );
}
