import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(process.env.REACT_APP_BACKEND_URL);
      setGreeting(data);
    })();
  });

  return <div className="App">{greeting}</div>;
}

export default App;
