// Analog Clock
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const hours = document.querySelector("#hours");

setInterval(() => {
  const time = new Date();

  const hour = time.getHours() * 30;
  const minute = time.getMinutes() * 6;
  const second = time.getSeconds() * 6;

  hours.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minutes.style.transform = `rotateZ(${minute}deg)`;
  seconds.style.transform = `rotateZ(${second}deg)`;
});

// digital clock
const digitalHours = document.querySelector(".time_hours");
const digitalMinutes = document.querySelector(".time_minutes");
const digitalSeconds = document.querySelector(".time_seconds");
let digitalDayNight = document.querySelector(".time_dayNight");

setInterval(() => {
  const digitalTime = new Date();

  let digitalHour = digitalTime.getHours();
  let digitalMinute = digitalTime.getMinutes();
  let digitalSecond = digitalTime.getSeconds();

  if(digitalHour >12){
    digitalHour = digitalHour - 12
    digitalDayNight.textContent = "PM"
  }
  if(digitalHour < 10){
    digitalHour = "0" + digitalHour
  }
  if(digitalMinute < 10){
    digitalMinute = "0" + digitalMinute
  }
  if(digitalSecond < 10){
    digitalSecond = "0" + digitalSecond
  }
  digitalHours.textContent = digitalHour;
  digitalMinutes.textContent = digitalMinute;
  digitalSeconds.textContent = digitalSecond;
});
