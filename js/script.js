"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct, Congrats!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.background = "green";
    document.querySelector(".number").style.width = "170px";
    document.querySelector(".number").style.position = "absolute";
    document.querySelector(".number").style.right = "46%";
    document.querySelector(".guess").style.backgroundColor = "green";
    document.querySelector(".number").style.color = "green";
      
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      textContent = highscore;
    }
  }
      else if (guess !== secretNumber) {
        if (score > 1) {
          document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
          score--;
          document.querySelector(".score").textContent = score;
        } else {
          document.querySelector(".message").textContent = "💔 You lost the game!";
          document.querySelector(".score").textContent = 0;
    
          document.querySelector("body").style.backgroundColor = "#9d0208";
          document.querySelector(".number").style.width = "170px";
          document.querySelector(".number").style.position = "absolute";
          document.querySelector(".number").style.right = "46%";
          document.querySelector(".guess").style.backgroundColor = "#9d0208";
          document.querySelector(".number").style.color = "#9d0208";
        }
    }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💔 You lost the game!";
  //     document.querySelector(".score").textContent = 0;

  //     document.querySelector("body").style.backgroundColor = "#9d0208";
  //     document.querySelector(".number").style.width = "170px";
  //     document.querySelector(".number").style.position = "absolute";
  //     document.querySelector(".number").style.right = "46%";
  //     document.querySelector(".guess").style.backgroundColor = "#9d0208";
  //     document.querySelector(".number").style.color = "#9d0208";
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💔 You lost the game!";
  //     document.querySelector(".score").textContent = 0;

  //     document.querySelector("body").style.backgroundColor = "#9d0208";
  //     document.querySelector(".number").style.width = "170px";
  //     document.querySelector(".number").style.position = "absolute";
  //     document.querySelector(".number").style.right = "46%";
  //     document.querySelector(".guess").style.backgroundColor = "#9d0208";
  //     document.querySelector(".number").style.color = "#9d0208";
  //   }
  //   }
});
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector(".message").textContent = "💡 Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "rgb(34, 34, 34)";
    document.querySelector(".guess").style.background = "rgb(34, 34, 34)";
    document.querySelector(".guess").value = '';
    document.querySelector(".number").style.color = "rgb(34, 34, 34)";
    document.querySelector(".number").style.width = "100px";
    document.querySelector(".number").style.position = "absolute";
    document.querySelector(".number").style.right = "48%";
    document.querySelector(".number").textContent = "?";
  });
