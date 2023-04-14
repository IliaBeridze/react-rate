import Card from "./components/Card";
import Result from "./components/Result";
import "./App.scss";
import { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState(null);

  const [activeCard, setActiveCard] = useState(false);
  function showCard() {
    setActiveCard(activeId !== null);
  }

  function selectHandler(item) {
    setActiveId(item);
  }

  return (
    <div className="App">
      {activeCard ? (
        <Result item={activeId} />
      ) : (
        <Card
          onSelect={selectHandler}
          activeId={activeId}
          onSubmit={showCard}
        />
      )}
    </div>
  );
}

export default App;
