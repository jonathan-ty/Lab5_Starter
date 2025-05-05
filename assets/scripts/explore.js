// explore.js

window.addEventListener('DOMContentLoaded', init);

//Global Vars
const synth = window.speechSynthesis;
let voiceSelect;
let voices = [];
let inputTxt;
let face;


function init() {
  voiceSelect = document.getElementById("voice-select");
  inputTxt = document.getElementById("text-to-speak");
  const button = document.querySelector("button");
  face = document.querySelector('img');
  

  getVoicesList();
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = getVoicesList;
  }

  button.addEventListener("click", () => {
    textToSpeech();
  });
}

function getVoicesList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function textToSpeech(){
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  utterThis.onstart = () => {
    face.src = '/assets/images/smiling-open.png';
  };

  utterThis.onend = () => {
    face.src = '/assets/images/smiling.png';
  };

  synth.speak(utterThis)
}
