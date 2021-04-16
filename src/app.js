/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var r1 = Math.floor(Math.random() * who.length);
  var r2 = Math.floor(Math.random() * action.length);
  var r3 = Math.floor(Math.random() * what.length);
  var r4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[r1] + action[r2] + what[r3] + when[r4];
};
