import { useState } from "react";
import Landing from "./component/Landing_page/Landing";
import Game from "./component/Landing_page/Game";

function App() {
  const [started, setstarted] = useState(false);
  const toggel = () => {
    setstarted((prev) => !prev);
  };
  return <>{started ? <Game /> : <Landing a={toggel} />}</>;
}

export default App;
