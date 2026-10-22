
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  return (
    <div>
      <h1>Timer: {count}</h1>

      <button onClick={() => setRunning(!running)}>
        {running ? 'Stop Timer' : 'Start Timer'}
      </button>
    </div>
  );
}

export default App;
