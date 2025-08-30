let randomNumber;
let min = 1;
let max = 100;

function startNewGame() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("message").textContent = "Masukin angka tebakanmu!";
  document.getElementById("guessInput").value = "";
}

document.getElementById("applyRange").addEventListener("click", () => {
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);
  startNewGame();
});

document.getElementById("guessBtn").addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "Masukin angka dulu dong!";
    return;
  }

  if (guess < randomNumber) {
    message.textContent = "Terlalu kecil! 🔽";
  } else if (guess > randomNumber) {
    message.textContent = "Terlalu besar! 🔼";
  } else {
    message.textContent = "🎉 Betul! Angkanya adalah " + randomNumber;
    // confetti effect
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }
});

document.getElementById("restartBtn").addEventListener("click", startNewGame);

// mulai game pertama kali
startNewGame();
