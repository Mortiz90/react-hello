import React from 'react'
import TrafficLight from './TrafficLight.jsx'
import trbackground from "../../img/trbackground.jpg"

const home = () => {
  return (
	<div>
		<TrafficLight/>
		<img src={trbackground}/>      
	</div>
  )
}

export default home