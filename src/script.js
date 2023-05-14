const daysEl = document.querySelector("#days");
const minutesEl = document.querySelector("#minutes");
const hoursEl = document.querySelector("#hours");
const secondsEl = document.querySelector("#seconds");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const snowContainer = document.querySelector(".snow-container");
const countdown = document.querySelector(".countdown");

const loader = document.querySelector(".loader-container");

const snowContent = ["&#10052", "&#10053", "&#10054"];
const snowColors = ["#ffffff", "#ecfffd", "#a0e6ec", "#94f2f4"];

const addForwardZero = (value) => (value < 10 ? `0${value}` : `${value}`);

function update() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  daysEl.textContent = addForwardZero(days);
  hoursEl.innerText = addForwardZero(hours);
  minutesEl.innerText = addForwardZero(minutes);
  secondsEl.innerText = addForwardZero(seconds);
}

const getRandomInteger = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomStyles = () => {
  const top = getRandomInteger();
  const left = getRandomInteger();
  const dur = getRandomInteger(4, 24);
  const size = getRandomInteger(2, 88);
  return ` 
    top: -${top}%; 
    left: ${left}%; 
    font-size: ${size}px; 
    animation-duration: ${dur}s; 
    color: ${snowColors[getRandomInteger(0, snowColors.length - 1)]}
    `;
};

const createSnow = (num) => {
  for (let i = 0; i < num; i++) {
    const snowFlake = document.createElement("div");
    snowFlake.className = "snowflake parallax-item";
    snowFlake.style.cssText = getRandomStyles();
    snowFlake.innerHTML = snowContent[getRandomInteger(0, 2)];
    snowContainer.append(snowFlake);
  }
};

window.addEventListener("load", () => {
  setTimeout(() => {
    countdown.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1000);
});

setInterval(update, 1000);
createSnow(88);
