//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Anirban";
const currentDate = new Date();
// const currentDate = new Date(2024, 8, 19); // Rough Format: (yyyy, mm, dd)
// console.log(currentDate);
const year = currentDate.getFullYear();
// console.log(year);

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
