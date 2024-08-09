import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="video-container">
        <video src="Air (1).mp4" autoPlay loop muted></video>
      </div>
    </>
  );
}

export default App;


