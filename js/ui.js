import { getGifForText } from "./gestures.js";
import { startListening } from "./speech.js";

document.addEventListener("DOMContentLoaded", () => {
  // ================= DOM ELEMENTS =================
  const gifDisplay = document.querySelector(".avatar-gif");
  const currentSignText = document.getElementById("current-sign");
  const quickSignButtons = document.querySelectorAll(".sign-btn");
  const transcriptDiv = document.getElementById("transcript");
  const textInput = document.getElementById("text-input");
  const translateBtn = document.getElementById("translate-btn");
  const micButton = document.getElementById("mic-button");

  // ================= COMMON DISPLAY FUNCTION =================
  function displayFromText(text) {
    if (!text) return;

    const cleanedText = text.trim();
    const gifPath = getGifForText(cleanedText);

    gifDisplay.src = gifPath + "?t=" + Date.now(); // force reload
    currentSignText.textContent = cleanedText;
    transcriptDiv.textContent = cleanedText;
  }

  // ================= QUICK SIGN BUTTONS =================
  quickSignButtons.forEach(button => {
    button.addEventListener("click", () => {
      const word = button.textContent.trim();
      displayFromText(word);
    });
  });

  // ================= TEXT INPUT =================
  translateBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    displayFromText(text);
  });

  // ================= MIC BUTTON =================
  micButton.addEventListener("click", () => {
    startListening();
    micButton.textContent = "🎤 Listening...";
  });

  // ================= RESET MIC TEXT WHEN SPEECH ENDS =================
  document.addEventListener("speech-ended", () => {
    micButton.textContent = "🎤 Start Listening";
  });
});
