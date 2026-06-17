import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div className="flex w-full h-screen " style={{ backgroundColor: color }}>
      <div className="flex py-3 px-3 "></div>
      <div className="flex flex-col gap-3 fixed left-4  mt-5">
        <button
          className="bg-red-500 px-4 py-2 rounded"
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          className="bg-yellow-500 px-4 py-2 rounded"
          onClick={() => {
            setColor("yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="bg-blue-500 px-4 py-2 rounded"
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
        <button
          className="bg-orange-500 px-4 py-2 rounded"
          onClick={() => {
            setColor("orange");
          }}
        >
          Orange
        </button>
        <button
          className="bg-gray-500 px-4 py-2 rounded"
          onClick={
            () => {setColor("grey")}}
        >
          Grey
        </button>
        <button
          className="bg-pink-500 px-4 py-2 rounded"
          onClick={() => {
            setColor("pink");
          }}
        >
          Purplle
        </button>
        <button
          className="bg-brown-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setColor("brown");
          }}
        >
          Brown
        </button>
        <button
          className="bg-green-500  px-4 py-2 rounded"
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          className="bg-pink-500  px-4 py-2 rounded"
          onClick={() => {
            setColor("pink");
          }}
        >
          Pink
        </button>
      </div>
    </div>
  );
}

export default App;
