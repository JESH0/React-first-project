import { useState } from "react";
import React from "react";

 function Appp() {
     const [bgColor, setBgColor] = useState("bg-white");
    const colorss = [
    {name : "Blue", class : "bg-blue-600"},
    {name : "Red", class : "bg-red-600"},
    {name : "Green", class : "bg-green-600"},
    {name : "Cyan", class : "bg-cyan-600"},
    {name : "Black", class : "bg-black"}

    ];
    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${bgColor}`}>
        <div className="flex flex-wrap gap-4 p-5">

   {colorss.map((color)=>{
    <button key={color.name}
    onClick={() => setBgColor(color.class)}
    className={`px-6 py-2 rounded-2xl ${color.class} text-white font-semibold shadow-md hover:scale-105 active:scale-95 transition-transform duration-300 `}
    >

{color.name}
    </button>
   })}

        </div>
        
        </div>
    )
}

export default Appp