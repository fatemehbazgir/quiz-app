import formatData from "./helper.js";
const loader = document.getElementById("loader");
const container = document.getElementById("container");
const URL =
  "https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple";

let formattedData = null;
const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formattedData = formatData(json.results);
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fetchData);
