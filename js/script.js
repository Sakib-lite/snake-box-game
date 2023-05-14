let current = document.getElementById("1");
current.classList.add("current");
let nextBlock = +current.id;
let score = 0;
const visitedNodes = {};
visitedNodes[current.id] = true;

const moveBlockSound = new Audio(
  "https://www.fesliyanstudios.com/play-mp3/387"
);
const seccessAttemptSound = new Audio(
  "https://www.fesliyanstudios.com/play-mp3/2963"
);

// generating random number between 1 and 121
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generating the target black ball
const generateBall = (nodes) => {
  if (Object.keys(nodes).length >= 121) {
    score++;
    document.getElementById("gameboard").style.display = "none";
    document.getElementById("final-scoreboard").style.display = "flex";
    document.getElementById("final-score").innerHTML =
      "Your final score is " + score;
    document.getElementById("scoreboard").innerText = "";
    document.getElementById("scoreboard-text").innerText = "";
    return;
  }

  const randomNumber = generateRandomInteger(1, 121).toString();
  if (!nodes[randomNumber]) return randomNumber;
  else return generateBall(nodes);
};

//eating the black ball
const targetAttemptSuccessFunc = () => {
  target.classList.remove("targetBall"); //removing css properties
  const ball = generateBall(visitedNodes);
  target = document.getElementById(ball);
  target.classList.add("targetBall");
  score++;
  document.getElementById("scoreboard").innerText = score;
  seccessAttemptSound.play();
};

// rounding the target ball
let targetBall = generateBall(visitedNodes);
let target = document.getElementById(targetBall);
target.classList.add("targetBall");

// move block left,right,up and down
const moveBlock = () => {
  current.classList.remove("current");
  current.classList.add("visited");

  let next = document.getElementById(nextBlock);
  current = next;
  current.classList.add("current");
  if (current.classList.contains("visited"))
    current.classList.remove("visited");
  if (!visitedNodes[current.id]) visitedNodes[current.id] = true;

  if (current.id === target.id) {
    targetAttemptSuccessFunc();
  } else moveBlockSound.play();
};

// event listeners
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowUp") {
    if (
      +nextBlock !== 1 &&
      +nextBlock !== 2 &&
      +nextBlock !== 3 &&
      +nextBlock !== 4 &&
      +nextBlock !== 5 &&
      +nextBlock !== 6 &&
      nextBlock !== 7 &&
      +nextBlock !== 8 &&
      +nextBlock !== 9 &&
      +nextBlock !== 10 &&
      +nextBlock !== 11
    )
      nextBlock -= 11;

    moveBlock();
  }

  if (e.code === "ArrowDown") {
    if (
      +nextBlock !== 111 &&
      +nextBlock !== 112 &&
      +nextBlock !== 113 &&
      +nextBlock !== 114 &&
      +nextBlock !== 115 &&
      +nextBlock !== 116 &&
      nextBlock !== 117 &&
      +nextBlock !== 118 &&
      +nextBlock !== 119 &&
      +nextBlock !== 120 &&
      +nextBlock !== 121
    )
      nextBlock += 11;

    moveBlock();
  }

  if (e.code === "ArrowRight") {
    if (
      +nextBlock !== 11 &&
      +nextBlock !== 22 &&
      +nextBlock !== 33 &&
      +nextBlock !== 44 &&
      +nextBlock !== 55 &&
      +nextBlock !== 66 &&
      nextBlock !== 77 &&
      +nextBlock !== 88 &&
      +nextBlock !== 99 &&
      +nextBlock !== 110 &&
      +nextBlock !== 121
    )
      nextBlock++;

    moveBlock();
  }

  if (e.code === "ArrowLeft") {
    if (
      +nextBlock !== 1 &&
      +nextBlock !== 12 &&
      +nextBlock !== 23 &&
      +nextBlock !== 34 &&
      +nextBlock !== 45 &&
      +nextBlock !== 56 &&
      nextBlock !== 67 &&
      +nextBlock !== 78 &&
      +nextBlock !== 89 &&
      +nextBlock !== 100 &&
      +nextBlock !== 111
    )
      nextBlock--;

    moveBlock();
  }
});
