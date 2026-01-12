document.addEventListener("DOMContentLoaded", () => {

  // ================= DOM ELEMENTS =================
  const gifDisplay = document.querySelector(".avatar-gif");
  const currentSignText = document.getElementById("current-sign");
  const quickSignButtons = document.querySelectorAll(".sign-btn");
  const transcriptDiv = document.getElementById("transcript");
  const textInput = document.getElementById("text-input");
  const translateBtn = document.getElementById("translate-btn");
  const micButton = document.getElementById("mic-button");

  // ================= MAP WORDS TO GIFS =================
  const signGifMap = {
    happy: "assets/happy.gif",
    yes: "assets/Yes.gif",
    no: "assets/no.gif",
    "thank you": "assets/Thankyou.gif",
    "how are you": "assets/howareyou.gif",
    sorry: "assets/sorry.gif"
  };

  // Default GIF if no match
  const defaultGif = "assets/unknown.gif";

  // ================= FUNCTION TO DISPLAY GIF =================
  function displaySign(word) {
    const key = word.trim().toLowerCase();
    currentSignText.textContent = word; // Show the word below the GIF
    gifDisplay.src = signGifMap[key] || defaultGif; // Update GIF
  }

  // ================= QUICK SIGN BUTTONS =================
  quickSignButtons.forEach(button => {
    button.addEventListener("click", () => {
      const word = button.textContent.trim();
      displaySign(word);
      transcriptDiv.textContent = word; // Optional: show word in transcript
    });
  });

  // ================= TEXT INPUT + TRANSLATE BUTTON =================
  translateBtn.addEventListener("click", () => {
    const word = textInput.value.trim();
    if (word) displaySign(word);
  });

  // ================= SPEECH RECOGNITION =================
  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    micButton.addEventListener("click", () => {
      recognition.start();
      micButton.textContent = "🎤 Listening...";
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      transcriptDiv.textContent = transcript;
      displaySign(transcript);
    };

    recognition.onend = () => {
      micButton.textContent = "🎤 Start Listening";
    };
  } else {
    console.warn("Speech Recognition not supported in this browser.");
  }

});
