// Copyright (c) 2024 Clara Tyman All rights reserved
//
// Created by: Clara Tyman
// Created on: April 2024
// This file contains the JS functions for index.html


const randomNumber = Math.floor(Math.random() * 6) + 1


function checkNumber() {
  // input
  const userNumber = parseInt(document.getElementById("user-number").value)

// process
  if (userNumber == randomNumber) {
    // output
    document.getElementById("result").innerHTML = "You are correct!"
  }

  if (userNumber != randomNumber) {
    document.getElementById("result").innerHTML = "You are incorrect! Guess again."
  }
}
