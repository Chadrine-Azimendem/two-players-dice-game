// get variables from DOM
const firsPlayerInpt = document.getElementById("firsPlayerInpt");
const secondPlayerInpt = document.getElementById("secondPlayerInpt");
const startBtn = document.getElementById("startBtn");
const rollBtn = document.getElementById("rollBtn");
const holdBtn = document.getElementById("holdBtn");
const firstPlayersName = document.getElementById("firstPlayersName");
const secondPlayersName = document.getElementById("secondPlayersName");

// disable roll button
rollBtn.disabled = true;
holdBtn.disabled = true;

// submit players name and enable the roll and Hold button.
startBtn.addEventListener("click", () => {
  let nameOne = firsPlayerInpt.value;
  let nameTwo = secondPlayerInpt.value;
  firstPlayersName.innerText = nameOne;
  secondPlayersName.innerText = nameTwo;
  firsPlayerInpt.style.display = "none";
  secondPlayerInpt.style.display = "none";
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  const soundTrack = document.getElementById("soundTrack");
  soundTrack.play();
  document.querySelector(".wrapper1").style.boxShadow =
    " 0px 2px 7px 14px #8bc34a";
});

// declare array of dice images.
let diceImages = [
  "./resouces/oneFaceDice.png",
  "./resouces/twoFaceDice.png",
  "./resouces/threeFaceDice.png",
  "./resouces/fourFaceDice.png",
  "./resouces/fiveFaceDice.png",
  "./resouces/sixFaceDice.png",
];

const diceImg = document.getElementById("diceImg");
const currentScoreOne = document.getElementById("currentScoreOne");
const currentScoreTwo = document.getElementById("currentScoreTwo");
const totalScoreOne = document.getElementById("totalScoreOne");
const totalScoreTwo = document.getElementById("totalScoreTwo");

// calculates a random integer between 1 and 6.
const randomNumber = () => {
  return Math.round(Math.random() * 5) + 1;
};

let currentScore = 0;
let totalScore = 0;

let scores = () => {
  let randNum = randomNumber();

  // show the dice only after the first roll.
  diceImg.style.display = "block";
  diceImg.src = diceImages[randNum - 1];
  currentScore += randNum;
  if (
    randNum !== 1 &&
    document.querySelector(".wrapper1").style.boxShadow !== "none"
  ) {
    currentScoreOne.innerText = currentScore;
  } else if (
    randNum !== 1 &&
    document.querySelector(".wrapper1").style.boxShadow === "none"
  ) {
    currentScoreTwo.innerText = currentScore;
  } else if (
    randNum === 1 &&
    document.querySelector(".wrapper1").style.boxShadow !== "none"
  ) {
    if (totalScoreOne.innerText == 0) {
      document.querySelector(".wrapper1").style.boxShadow = "none";
      document.querySelector(".wrapper2").style.boxShadow =
        " 0px 2px 7px 14px #8bc34a";
      currentScoreOne.innerText = 0;
      currentScore = 0;
    }
  } else if (
    randNum === 1 &&
    document.querySelector(".wrapper1").style.boxShadow === "none"
  ) {
    if (totalScoreTwo.innerText == 0) {
      document.querySelector(".wrapper2").style.boxShadow = "none";
      document.querySelector(".wrapper1").style.boxShadow =
        " 0px 2px 7px 14px #8bc34a";
      currentScoreTwo.innerText = 0;
      currentScore = 0;
    }
  }
};

// check who is the winner
let winnerChecker = () => {};

rollBtn.addEventListener("click", () => {
  scores();
});

holdBtn.addEventListener("click", () => {
  if (document.querySelector(".wrapper1").style.boxShadow !== "none") {
    totalScore += currentScore;
    totalScoreOne.innerText = totalScore;
    document.querySelector(".wrapper1").style.boxShadow = "none";
    currentScore = 0;
    totalScore = 0;
    currentScoreOne.innerText = 0;
    document.querySelector(".wrapper2").style.boxShadow =
      " 0px 2px 7px 14px #8bc34a";
  } else {
    totalScore += currentScore;
    totalScoreTwo.innerText = totalScore;
    document.querySelector(".wrapper2").style.boxShadow = "none ";
    currentScoreTwo.innerText = 0;
    document.querySelector(".wrapper1").style.boxShadow =
      " 0px 2px 7px 14px #8bc34a";
    currentScore = 0;
  }
});

// // executes these events when roll button is clicked
// rollBtn.addEventListener("click", () => {
//   // show the dice only after the first roll.
//   diceImg.style.display = "block";

//   let randNum = randomNumber();
//   diceImg.src = diceImages[randNum - 1];

//   // update the roll count
//   rolls++;
//   document.getElementById("rollsCount").textContent = rolls;

//   // update the score count.
//   score += randNum;
//   document.getElementById("scoreCount").textContent = score;

//   // check if player wins or loses
//   if (score > 20) {
//     playersName.innerText =
//       "Congratulations, you win!!! Enter your name to restart.";
//     score = 0;
//     rolls = 0;

//     // play winner sound
//     const win = document.getElementById("win");
//     win.play();

//     document.getElementById("scoreCount").textContent = score;
//     document.getElementById("rollsCount").textContent = rolls;
//     inputContent.style.display = "block";
//     nameSubmit.style.display = "block";
//     rollBtn.disabled = true;
//   } else if (score < 20 && randNum === 1) {
//     playersName.innerText = "Sorry, you lost!!! Enter your name to restart.";
//     score = 0;
//     rolls = 0;

//     const lost = document.getElementById("lost");
//     lost.play();

//     document.getElementById("scoreCount").textContent = score;
//     document.getElementById("rollsCount").textContent = rolls;
//     inputContent.style.display = "block";
//     nameSubmit.style.display = "block";
//     rollBtn.disabled = true;
//   }
// });
