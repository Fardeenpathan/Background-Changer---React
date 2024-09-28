import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const blueColor = () => {
    setColor("Blue");
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("Red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              onClick={() => setColor("Green")}
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Blue" }}
              onClick={blueColor}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Yellow", color: "black" }}
              onClick={() => setColor("Yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Black" }}
              onClick={() => setColor("Black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Pink" }}
              onClick={() => setColor("Pink")}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
