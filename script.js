document.addEventListener("DOMContentLoaded", function() {

  // Countdown Timer
  const countdownDate = new Date("2026-02-17T00:00:00").getTime();
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const wishMessage = document.getElementById("wishMessage");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if(distance <= 0){
      daysEl.innerText = 0;
      hoursEl.innerText = 0;
      minutesEl.innerText = 0;
      secondsEl.innerText = 0;
      wishMessage.innerText = "🎉 Happy Birthday Nimra! 🎉";
      clearInterval(countdownInterval);
      startConfetti();
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.innerText = days;
      hoursEl.innerText = hours;
      minutesEl.innerText = minutes;
      secondsEl.innerText = seconds;
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);

  // Surprise Button
  window.showBirthdayMessage = function() {
    wishMessage.innerHTML = "💖 Wishing you happiness, love, and laughter, Nimra! 💖";
    startConfetti();
  }

  // Confetti
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  let confettiParticles = [];

  function createConfetti() {
    confettiParticles = [];
    for (let i = 0; i < 150; i++) {
      confettiParticles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 6 + 4,
        d: Math.random() * 150,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.floor(Math.random() * 10) - 10
      });
    }
  }

  function drawConfetti() {
    ctx.clearRect(0, 0, W, H);
    confettiParticles.forEach(p => {
      ctx.beginPath();
      ctx.lineWidth = p.r / 2;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();
    });
    updateConfetti();
  }

  function updateConfetti() {
    confettiParticles.forEach(p => {
      p.y += Math.cos(p.d) + 3 + p.r / 2;
      p.x += Math.sin(0.01) * 2;
      if (p.y > H) {
        p.y = -10;
        p.x = Math.random() * W;
      }
    });
  }

  function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 20);
  }

  // Floating Balloons
  const colors = ["#FF4B5C","#FFD93D","#6BCB77","#4D96FF","#FF6F91"];
  for(let i=0;i<30;i++){
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.background = colors[Math.floor(Math.random()*colors.length)];
    balloon.style.left = Math.random()*window.innerWidth + "px";
    balloon.style.animationDuration = 5 + Math.random()*10 + "s";
    balloon.style.width = 30 + Math.random()*30 + "px";
    balloon.style.height = 40 + Math.random()*40 + "px";
    document.body.appendChild(balloon);
  }

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });

});
