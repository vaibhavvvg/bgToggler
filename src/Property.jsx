import { useState } from "react"

function Property({colorProp, txtInput}) {
    const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick = {() => setColor(colorProp)}
        className="outline-none px-4 py-1 rounded-full shadow-lg"
        style = {{backgroundColor:colorProp}}>{txtInput}</button>
      </div>
    </div>
  </div>
  )
}

export default Property