console.log("this is my alarm project ");
const alarmsSubmit = document.getElementById("alarmSubmit");
alarmsSubmit.addEventListener("click", setAlarm);

var audio = new Audio(`alarm.mp3`);
function ringBell() {
  audio.play();
}

function setAlarm(e) {
  e.preventDefault();
  const alarm = document.getElementById("alarm");
  alarmDate = new Date(alarm.value);
  console.log(`setting alarm ${alarmDate}..`);
  now = new Date();

  let timeToAlarm = alarmDate - now;
  console.log(alarmDate - now);
  if (timeToAlarm >= 0) {
    setTimeout(() => {
      console.log("ringing bell");
      ringBell();
    }, timeToAlarm);
  }
}
