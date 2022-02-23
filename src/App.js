import { useState } from "react";
import "./App.css";

function App() {
  const [txt, setTxt] = useState(1);

  return (
    <div className="App" onClick={() => setTxt(6)}>
      {txt}
    </div>
  );
}

export default App;
