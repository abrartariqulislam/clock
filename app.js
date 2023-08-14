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
