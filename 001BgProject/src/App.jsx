import { useState } from "react";
import React from "react";

export default function ColorButtons() {
  const [bgColor, setBgColor] = useState("bg-white");

  const colors = [
    { name: "Blue", class: "bg-blue-600" },
    { name: "Green", class: "bg-green-600" },
    { name: "Red", class: "bg-red-600" },
    { name: "Yellow", class: "bg-yellow-500" },
    { name: "Orange", class: "bg-orange-500" },
    { name: "Purple", class: "bg-purple-600" },
    { name: "Gray", class: "bg-gray-700" },
    { name: "Cyan", class: "bg-cyan-600" },
    { name: "Amber", class: "bg-amber-500" },
    { name: "Pink", class: "bg-pink-600" },
  ];

  return ( 
   <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${bgColor}`}>
      <div className="flex flex-wrap gap-4 p-6">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => setBgColor(color.class)}
            className={`px-6 py-2 rounded-2xl ${color.class} text-white font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform duration-300`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}
