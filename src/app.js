/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const suitIndex = Math.floor(Math.random() * 4);
  const numberIndex = Math.floor(Math.random() * 12);

  const suit = suits[suitIndex];
  const number = numbers[numberIndex];

  document.querySelector(".top-suit").innerHTML = suits[suitIndex];
  document.querySelector(".bottom-suit").innerHTML = suits[suitIndex];
  document.querySelector(".number").innerHTML = numbers[numberIndex];

  const color = suit === "♦" || suit === "♥" ? "red" : "black";
  document.querySelector(".top-suit").style.color = color;
  document.querySelector(".bottom-suit").style.color = color;
};
