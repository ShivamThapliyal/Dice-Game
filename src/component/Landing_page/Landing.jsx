import React from "react";
function Landing({ a }) {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center drop-shadow-sm ">
        <div>
          <img src="/image/Dice.png" />
        </div>

        <div className="flex flex-col items-center gap-8">
          <p className="p-2 mb-5 text-8xl text-nowrap">DICE GAME</p>
          <button
            onClick={a}
            className=" text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
