import Card from "./components/Card";
import Result from "./components/Result";
import "./App.scss";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  function getNum(item) {
    // console.log(item);
    setNumber(item);
  }

  return (
    <div className="App">
      <Card getNum={getNum} />
      <Result item={number} />
    </div>
  );
}

export default App;
