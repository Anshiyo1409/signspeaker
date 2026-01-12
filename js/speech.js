const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.continuous = true;

recognition.onresult = e => {
  const text = e.results[e.results.length - 1][0].transcript;
  document.getElementById("liveTranscript").innerText = text;

  const gif = getGifForText(text);
  document.getElementById("signGif").src = `assets/gifs/${gif}`;
};

function startListening() {
  recognition.start();
}

function stopListening() {
  recognition.stop();
}
