document.addEventListener("DOMContentLoaded", function() {

    // Typing Animation
    const text = "Dear Nimra, Wishing you a day filled with love, joy, and laughter! You deserve all the happiness in the world!";
    let index = 0;
    const typingElement = document.getElementById("typing");

    function type() {
        if(index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();

    // Confetti Creation
    for(let i=0; i<100; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        document.body.appendChild(confetti);
    }

    // Surprise Alert
    window.showSurprise = function() {
        alert("🎈 Surprise Nimra! 🎈\nHave an amazing birthday full of smiles and fun! 🎂🥳");
    }

    // Music Play
    window.playMusic = function() {
        const music = document.getElementById("birthdayMusic");
        music.play();
    }

});
