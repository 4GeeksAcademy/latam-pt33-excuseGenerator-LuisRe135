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
const composedExcuse = (noun, verb, object, time) => {
  let sentence =
    noun[Math.floor(Math.random() * noun.length)] +
    " " +
    verb[Math.floor(Math.random() * verb.length)] +
    " " +
    object[Math.floor(Math.random() * object.length)] +
    " " +
    time[Math.floor(Math.random() * time.length)];
  return sentence;
};

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = composedExcuse(
    who,
    action,
    what,
    when
  );
};
