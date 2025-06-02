import { useState } from "react";

// Reusable color button
function ColorButton({ color, setColor }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{
        backgroundColor: color,
        color: color === "black" ? "white" : "inherit",
      }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-3xl items-center">
          {/* Predefined Color Buttons */}
          {[
            "red",
            "orange",
            "yellow",
            "indigo",
            "blue",
            "purple",
            "violet",
            "pink",
            "white",
            "gray",
            "black",
          ].map((color) => (
            <ColorButton key={color} color={color} setColor={setColor} />
          ))}

          {/* Custom Color Picker */}
          <div className="flex items-center gap-2">
            <span className="text-xl" title="Pick a custom color">🎨</span>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 p-0 border-none cursor-pointer rounded-full overflow-hidden"
              title="Pick a custom color"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
