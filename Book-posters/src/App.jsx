import { useState } from "react";
import "./App.css";
import PosterList from "./components/posterList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PosterList />
    </>
  );
}

export default App;
