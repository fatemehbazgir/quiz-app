const score = JSON.parse(localStorage.getItem("score"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const scoreEle = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");
scoreEle.innerText = score;

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid username or score");
  } else {
    const finalScore = {
      name: input.value,
      score,
    };
    highScore.push(finalScore);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(10);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    localStorage.removeItem("score");
    window.location.assign("/");
  }
};

button.addEventListener("click", saveHandler);
