import React from "react";
import "../../style/game.css";
import { useState, useEffect } from "react";
function Game() {
  const number = [1, 2, 3, 4, 5, 6];
  const [selected, setselected] = useState(null);
  const [num, setnum] = useState(1);
  const [show, setshow] = useState("");
  const [err, seterr] = useState("");
  const [showrules, setshowrules] = useState(false);
  const select = (value) => {
    setselected(value);
    seterr("");
  };

  const generate = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rolldice = () => {
    if (!selected) {
      seterr("Please select the number");
      return;
    }
    const random = generate(1, 7);
    setnum(random);
    if (selected > random) {
      setshow("you are winner");
    } else if (selected < random) {
      setshow("Computer wins");
    } else if (selected === random) {
      setshow(" Draw");
    }
    setselected(null);
  };
  const reset = () => {
    setnum(1);
    setselected(null);
  };

  return (
    <>
      <div className="main">
        <div className="left-side">
          <div className="boxes">
            {number.map((value, i) => (
              <div
                className={`box-1 ${selected == value ? "isselected" : ""}`}
                key={i}
                onClick={() => select(value)}
              >
                {value}
              </div>
            ))}
            <p className="error">{err}</p>
          </div>
        </div>
        <div className="dice" onClick={rolldice}>
          <img src={`/dice/dice_${num}.png`} />
          <p className="dice-p">Click on Dice To Roll</p>
        </div>
        <div className="main-2">
          <div>
            <p className="winner">{show}</p>
          </div>
          <div className="main-3">
            <div className="2-button">
              <button
                onClick={() => setshowrules((prev) => !prev)}
                className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {showrules ? "Hide" : "Show"} Rules
              </button>
              {showrules && (
                <div className="rules">
                  <h3> Rules Of The Game</h3>
                  <p>First select the number from the boxes</p>
                  <p>Now click on the Dice</p>
                  <p>Whoever has the bigger number will win</p>
                </div>
              )}
            </div>
            <button
              onClick={reset}
              className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Game;
