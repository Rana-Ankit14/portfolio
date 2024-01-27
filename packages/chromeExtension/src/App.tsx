// src/App.tsx
import  { useEffect, useState } from 'react';
import { getCurrentTab } from './utils';

function App() {
  const [websiteName, setWebsiteName] = useState<string>('');
  useEffect(() => {
    getCurrentTab().then(tab => {
      if (tab) {
        setWebsiteName(tab?.title ?? 'Error fetching name');
      }
    });
  }, []);

  return (
    <div style={{
      height: '50%',
      width: '100%',
      padding: '20px',
      background:'red'
    }}>
      <p>Current Website: {websiteName}</p>
    </div>
  );
}

export default App;
