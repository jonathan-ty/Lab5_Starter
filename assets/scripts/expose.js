// expose.js

window.addEventListener("DOMContentLoaded", init);

// Global Variables
let CURRENT_HORN = "";
let CURRENT_VOLUME = parseInt(volume.value) / 100;
const jsConfetti = new JSConfetti();

function init() {
  const horn = document.getElementById("horn-select");
  const button = document.querySelector("button");
  const img = document.querySelector("img");
  const audio = document.querySelector("audio");
  const volume = document.getElementById("volume");
  const volume_level = document.querySelector("#volume-controls img");

  horn.addEventListener("change", () => {
    setImage(horn, img);
  });

  volume.addEventListener("input", () => {
    setVolume(volume_level, audio);
  });

  button.addEventListener("click", () => {
    setSound(audio);
  });
}

function setImage(horn, img) {
  CURRENT_HORN = horn.value;
  if (CURRENT_HORN === "select") {
    img.src = `assets/images/no-image.png`;
  } else {
    img.src = `assets/images/${CURRENT_HORN}.svg`;
    img.alt = `${CURRENT_HORN}`;
  }
}

function setVolume(volume_level, audio) {
  CURRENT_VOLUME = parseInt(volume.value);
  if (CURRENT_VOLUME === 0) {
    volume_level.src = `assets/icons/volume-level-0.svg`;
  } else if (CURRENT_VOLUME < 33) {
    volume_level.src = `assets/icons/volume-level-1.svg`;
  } else if (CURRENT_VOLUME < 67) {
    volume_level.src = `assets/icons/volume-level-2.svg`;
  } else {
    volume_level.src = `assets/icons/volume-level-3.svg`;
  }
  CURRENT_VOLUME /= 100;
  audio.volume = CURRENT_VOLUME;
}

function setSound(audio) {
  if (CURRENT_HORN === "select") {
    audio.src = "";
  } else {
    audio.src = `assets/audio/${CURRENT_HORN}.mp3`;
  }
  if (CURRENT_HORN === "party-horn") {
    jsConfetti.addConfetti();
  }
  audio.play();
}