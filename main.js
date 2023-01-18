// Global Variables
const skillsSection = document.querySelector(".our-skills");
const skillsProgress = document.querySelectorAll(".the-progress span");
const countDownDate = new Date(2023, 3, 15, 23, 59, 59).getTime();
let dateNow;
let days;
let hours;
let minutes;
let seconds;

// Create Progress Bar Animation
window.onscroll = (_) => {
  if (window.scrollY >= skillsSection.offsetTop - 380) {
    skillsProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    skillsProgress.forEach((span) => {
      span.style.width = '0';
    });
  }
};

// Create Countdown Timer
let counter = setInterval((_) => {
  // Get Current Date
  dateNow = new Date().getTime();

  dateDiff = countDownDate - dateNow;

  // Get Days
  days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  // Get Hours
  hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Get Minutes
  minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  // Get Seconds
  seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
