let current = document.getElementById("1");
let nextDiv = +current.id;
let score = 0;
const visitedNodes = {};
visitedNodes[current.id] = true;
current.classList.add("current");
console.log(visitedNodes);

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(Object.keys(visitedNodes));
const generateBall = (nodes) => {
  if (Object.keys(nodes).length >= 121) {
    score++
    console.log("your score is ", score);
    return;
  }

  const number = generateRandomInteger(1, 121).toString();
  console.log(number, "generate ball");
  if (!nodes[number]) {
    return number;
  } else {
    console.log("blah");
    return generateBall(nodes);
  }
};
let targetBall = generateBall(visitedNodes);
let target = document.getElementById(targetBall);
target.classList.add("targetBall");
console.log(target);

document.addEventListener("keydown", (e) => {
  console.log(e.code);

  if (e.code === "ArrowUp") {
    current.classList.remove("current");
    current.classList.add("visited");

    if (nextDiv >= 1 && nextDiv <= 11) nextDiv += 110;
    else nextDiv -= 11;
    let next = document.getElementById(nextDiv);
    current = next;
    current.classList.add("current");
    if (current.classList.contains("visited"))
      current.classList.remove("visited");
    if (!visitedNodes[current.id]) visitedNodes[current.id] = true;

    if (target.id === current.id) {
      target.classList.remove("targetBall");
      const ball = generateBall(visitedNodes);
      target = document.getElementById(ball);
      target.classList.add("targetBall");
      score++;
      console.log(score);
    }
  }

  if (e.code === "ArrowDown") {
    current.classList.remove("current");
    current.classList.add("visited");

    if (+nextDiv < 111) nextDiv += 11;
    else nextDiv -= 110;
    let next = document.getElementById(nextDiv);
    current = next;
    current.classList.add("current");
    if (current.classList.contains("visited"))
      current.classList.remove("visited");
    if (!visitedNodes[current.id]) visitedNodes[current.id] = true;
    if (target.id === current.id) {
        target.classList.remove("targetBall");
        const ball = generateBall(visitedNodes);
        target = document.getElementById(ball);
        target.classList.add("targetBall");
        score++;
        console.log(score);
    }
  }

  if (e.code === "ArrowRight") {
    current.classList.remove("current");
    current.classList.add("visited");
    if (+nextDiv === 121) nextDiv = 1;
    else nextDiv++;

    let next = document.getElementById(nextDiv);
    current = next;
    current.classList.add("current");
    if (current.classList.contains("visited"))
      current.classList.remove("visited");
    if (!visitedNodes[current.id]) visitedNodes[current.id] = true;
    if (target.id === current.id) {
        target.classList.remove("targetBall");
        const ball = generateBall(visitedNodes);
        target = document.getElementById(ball);
        target.classList.add("targetBall");
        score++;
        console.log(score);
    }
  }

  if (e.code === "ArrowLeft") {
    current.classList.remove("current");
    current.classList.add("visited");
    if (+nextDiv === 1) nextDiv = 121;
    else nextDiv--;

    let next = document.getElementById(nextDiv);
    current = next;
    current.classList.add("current");
    if (current.classList.contains("visited"))
      current.classList.remove("visited");
    if (!visitedNodes[current.id]) visitedNodes[current.id] = true;
    if (target.id === current.id) {
        target.classList.remove("targetBall");
        const ball = generateBall(visitedNodes);
        target = document.getElementById(ball);
        target.classList.add("targetBall");
        score++;
        console.log(score);
    }
  }
});
