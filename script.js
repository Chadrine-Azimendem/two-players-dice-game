// get variables from DOM
const firsPlayerInpt = document.getElementById("firsPlayerInpt");
const secondPlayerInpt = document.getElementById("secondPlayerInpt");
const startBtn = document.getElementById("startBtn");
const diceImg = document.getElementById("diceImg");
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

// calculates a random integer between 1 and 6.
const randomNumber = () => {
  return Math.round(Math.random() * 5) + 1;
};

// declare array of dice images.
let diceImages = [
  "./resouces/oneFaceDice.png",
  "./resouces/twoFaceDice.png",
  "./resouces/threeFaceDice.png",
  "./resouces/fourFaceDice.png",
  "./resouces/fiveFaceDice.png",
  "./resouces/sixFaceDice.png",
];

const scoreOne = document.getElementById("scoreOne");
const totalOne = document.getElementById("totalOne");
let playerOneScore = 0;

// executes these events when roll button is clicked
rollBtn.addEventListener("click", () => {
  // show the dice only after the first roll.
  diceImg.style.display = "block";

  let randNum = randomNumber();
  diceImg.src = diceImages[randNum - 1];

  // update the roll count
  rolls++;
  document.getElementById("rollsCount").textContent = rolls;

  // update the score count.
  score += randNum;
  document.getElementById("scoreCount").textContent = score;

  // check if player wins or loses
  if (score > 20) {
    playersName.innerText =
      "Congratulations, you win!!! Enter your name to restart.";
    score = 0;
    rolls = 0;

    // play winner sound
    const win = document.getElementById("win");
    win.play();

    document.getElementById("scoreCount").textContent = score;
    document.getElementById("rollsCount").textContent = rolls;
    inputContent.style.display = "block";
    nameSubmit.style.display = "block";
    rollBtn.disabled = true;
  } else if (score < 20 && randNum === 1) {
    playersName.innerText = "Sorry, you lost!!! Enter your name to restart.";
    score = 0;
    rolls = 0;

    const lost = document.getElementById("lost");
    lost.play();

    document.getElementById("scoreCount").textContent = score;
    document.getElementById("rollsCount").textContent = rolls;
    inputContent.style.display = "block";
    nameSubmit.style.display = "block";
    rollBtn.disabled = true;
  }
});
