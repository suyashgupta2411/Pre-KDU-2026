let DEFAULT_MINUTES = 25;
let totalSeconds = DEFAULT_MINUTES * 60;
let remaining = totalSeconds;
let timer = null;
let sessions = 0;

const display = document.getElementById("timer-display");
const progress = document.querySelector(".progress");
const alarm = document.getElementById("alarm");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

const customInput = document.getElementById("custom-minutes");
const setBtn = document.getElementById("set-timer");

const sessionText = document.getElementById("sessions");

const CIRCUMFERENCE = 880;

function updateDisplay() {
  const m = Math.floor(remaining / 60).toString().padStart(2, "0");
  const s = (remaining % 60).toString().padStart(2, "0");
  display.textContent = `${m}:${s}`;

  const progressRatio = remaining / totalSeconds;
  progress.style.strokeDashoffset =
    CIRCUMFERENCE * (1 - progressRatio);
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    remaining--;
    updateDisplay();

    if (remaining <= 0) {
      clearInterval(timer);
      timer = null;

      alarm.play();
      sessions++;
      sessionText.textContent = `Sessions Completed: ${sessions}`;

      remaining = totalSeconds;
      updateDisplay();
      alert("Session Complete!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  pauseTimer();
  remaining = totalSeconds;
  updateDisplay();
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;

setBtn.onclick = () => {
  const val = Number(customInput.value);

  if (val < 1 || val > 60 || isNaN(val)) {
    alert("Please enter a number between 1 and 60");
    return;
  }

  DEFAULT_MINUTES = val;
  totalSeconds = val * 60;
  remaining = totalSeconds;
  updateDisplay();
};

updateDisplay();
