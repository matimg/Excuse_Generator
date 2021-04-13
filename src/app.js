/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog ", "my granma ", "his turtle ", "my bird "];
  let what = ["eat ", "pissed ", "crushed ", "broked "];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var r1 = Math.floor(Math.random() * who.length);
  var r2 = Math.floor(Math.random() * what.length);
  var r3 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = who[r1] + what[r2] + when[r3];
};
