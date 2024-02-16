import React from "react";

const date = new Date(2023, 1, 1, 9);
const currentTime = date.getHours();

let greeting;

const custDesign = {
    color: "yellow",
    fontSize: "200px",
    marginLeft: "50px",
    // fontFamily: "cursive",
    textDecoration: "underline"
}

if (currentTime < 12) {
    greeting = "Good Morning";
    custDesign.color = "green";
} else if (currentTime <18){
    greeting = "Good Afternoon";
    custDesign.color = "Red";
} else {
    greeting = "Good Night";
    custDesign.color = "blue";
}

const Greet = () => {
    return(
    <div>
        <h1 style={custDesign}>{greeting}</h1>
    </div>
 )};

 export default Greet;