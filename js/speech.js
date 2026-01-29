import { getGifForText } from "./gestures.js";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = false;

recognition.onresult = (e) => {
  const text = e.results[0][0].transcript;
  console.log("🎤 Speech:", text);

  const transcriptEl = document.getElementById("transcript");
  if (transcriptEl) {
    transcriptEl.innerText = text;
  }

  const gifPath = getGifForText(text);
  document.querySelector(".avatar-gif").src =
    gifPath + "?t=" + Date.now();
};


export function startListening() {
  recognition.start();
}

export function stopListening() {
  recognition.stop();
}
