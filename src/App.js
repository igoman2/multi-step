import { useState } from "react";
import Listing from "./long-example-listing";
import ShortExample from "./short-example-hello";
import "./styles.css";
// one hook instance. if app passes dispaces down then it uses it
// if it does not then internal one works with controlled workflow

// 1. do none and its inernal
// 2. useHook outside but have to pass down values it will default as 1 but u can read stare
// 3. override any callbacks

export default function App() {
  const [onToggle, setOnToggle] = useState(false);
  const [onToggleSecond, setOnToggleSecond] = useState(false);
  return (
    <main className="App">
      <div style={{ margin: "1rem" }} />
      <button onClick={() => setOnToggleSecond(!onToggle)}>
        Toggle Short EX
      </button>
      <div style={{ margin: "1rem" }} />
      <button onClick={() => setOnToggle(!onToggle)}> Toggle Long Ex</button>

      <div style={{ margin: "5rem" }} />
      <ShortExample open={onToggleSecond} onClose={setOnToggleSecond} />
      <Listing open={onToggle} onClose={setOnToggle} />
    </main>
  );
}
