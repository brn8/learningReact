//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText(){
// 	return 'Click on me!';
// }
//Create a react component

function getTime(){
	let date = new Date();
	return (new Date().toLocaleTimeString());
}
const App = () =>{
	const buttonText = { text: 'Click me'};
	let time = "Current Time:  "
	return (
		<div>
		<label>{time}{getTime()}</label><br/><br/>
		<label className="label" htmlFor="name">Enter Name:</label>
		<input id="name" type="text"/>
  		<button style={{backgroundColor:'blue', color:'white'}}>{buttonText.text}</button>
		</div>
);
 };

ReactDOM.render(<App/>,document.getElementById("root"));



