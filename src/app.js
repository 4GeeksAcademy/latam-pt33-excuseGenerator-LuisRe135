/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];

let action = ["ate", "peed", "crushed", "broke"];

let what = ["my homework", "my phone", "the car"];

let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function randonNumberGenerator(array) {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
}

const excuse =
  randonNumberGenerator(who) +
  " " +
  randonNumberGenerator(action) +
  " " +
  randonNumberGenerator(what) +
  " " +
  randonNumberGenerator(when);

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuse;
};
