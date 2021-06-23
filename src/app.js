/* eslint-disable */
import "./style.css";
let randomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let suitAtRandom = suit[Math.round(Math.random() * (suit.length - 1))];
  return suitAtRandom;
};

let randomNumber = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
  let numbersAtRadnom =
    numbers[Math.round(Math.random() * (numbers.length - 1))];
  return numbersAtRadnom;
};

window.onload = function() {
  let number = document.querySelector(".number");
  number.textContent = randomNumber();

  let suit = randomSuit();

  let topSuit = document.querySelector(".top-suit");
  topSuit.textContent = suit;

  let bottomSuit = document.querySelector(".bottom-suit");
  bottomSuit.textContent = suit;
};
