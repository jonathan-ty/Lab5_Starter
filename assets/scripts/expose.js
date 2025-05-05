// expose.js

window.addEventListener("DOMContentLoaded", init);

// Implementation
// You may notice an “init()” function in your JS files - this is an initialize function. It isn’t called until the whole DOM has been parsed, so it’s a good idea to have your functions / element queries stem from this init() function, otherwise you run the risk of trying to query an element that hasn’t loaded yet.

// Requirements:
// When you select a horn from the drop down menu, the following should occur:
// The correct image should display
// The correct audio sound file should be set
// When you change the volume on the slider, the following should occur:
// At zero volume, the mute icon (level 0) should be displayed
// From 1 to < 33 volume the volume level one svg should be displayed
// From 33 to < 67 volume the volume level two svg should be displayed
// From 67 and up the volume level three svg should be displayed
// The corresponding volume should be set for the audio element (note: this element’s volume is not out of 100)
// Hint: the volume slider's range is from 0 - 100, but the audio element has a different propertyLinks to an external site..
// When you click the “Play Sound” button the following should occur:
// The corresponding sound for the horn selected should play out loud at the specified volume
// If the Party Horn is selected, confetti should shoot out when the play button is clicked, as shown in the video
// A library has been included for you to accomplish this, more on how to use it here https://github.com/loonywizard/js-confettiLinks to an external site.
// Do not run the installation steps, or include the import statement as we have already installed and imported the confetti library for you
// Once you are done, please publish your explose.html on GitHub pages.
function init() {
  const horn = document.getElementById("horn-select");
  const button = document.querySelector("button");
  const img = document.querySelector("img");
  const audio = document.querySelector("audio");
  const volume = document.getElementById("volume");

  let CURRENT_HORN = "";
  let CURRENT_VOLUME = volume.value;

  horn.addEventListener("change", (event) => {
    CURRENT_HORN = event.target.value;
    if (CURRENT_HORN === "select") {
      img.src = `assets/images/no-image.png`;
    } else {
      img.src = `assets/images/${CURRENT_HORN}.svg`;
    }
  });

  volume.addEventListener("change", (event) => {
    CURRENT_VOLUME = parseInt(event.target.value)/100;
  });

  button.addEventListener("click", (event) => {
    if (CURRENT_HORN === "select") {
      audio.src = "";
    } else {
      audio.src = `assets/audio/${CURRENT_HORN}.mp3`;
      console.log(CURRENT_HORN);
    }
    audio.volume = CURRENT_VOLUME;
    audio.play();
  });
}
