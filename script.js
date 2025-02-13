function startCelebration() {
    document.getElementById("surprise").classList.remove("hidden");
    document.getElementById("music").play();
    launchConfetti();
    startBalloons();
    startCountdown();
}

function launchConfetti() {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

function startBalloons() {
    let container = document.getElementById("balloons");
    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 5000);
    }
}

function startCountdown() {
    let countdown = document.getElementById("countdown");
    let timeLeft = 10;
    let timer = setInterval(() => {
        countdown.innerText = `🎉 Celebration in ${timeLeft} seconds! 🎈`;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            countdown.innerText = "🎊 Let the party begin! 🎊";
        }
    }, 1000);
}
