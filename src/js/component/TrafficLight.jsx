import React, { useEffect, useState } from 'react'

const TrafficLight = () => {
  const [color, setColor] = useState("");


  return (
    <div className="container">
      <div className="tubo">

      </div>

      <div className="caja">
        
        <div 
        onClick={() => setColor("red")}
          className={'red-light' + (color === "red" ? " glow" : "")}></div>
        
        <div 
        onClick={() => setColor("yellow")}
        className={'yellow-light' + (color === "yellow" ? " glow" : "")}></div>
        
        <div 
        onClick={() => setColor("green")}
        className={'green-light' + (color === "green" ? " glow" : "")}></div>


      </div>

    </div>
   )
}

export default TrafficLight