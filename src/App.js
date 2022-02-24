import { useState } from "react";
import "./App.css";

function App() {
  const [txt, setTxt] = useState(1);

  return (
    <div className="App">
      <div onClick={() => setTxt(2)}>2-{txt}</div>
      <div onClick={() => setTxt(3)}>3-{txt}</div>
      <div onClick={() => setTxt(4)}>4-{txt}</div>
    </div>
  );
}

export default App;
