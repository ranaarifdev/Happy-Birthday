// 1. Create Floating Hearts
function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// 2. Typing Effect for Message
const message = "On this special day, I wanted to create something as beautiful as you are. May your year be filled with as much joy, love, and laughter as you give to everyone around you. You deserve the world, Nimra!";
let index = 0;

function typeMessage() {
    if (index < message.length) {
        document.getElementById("typed-text").innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    }
}

// 3. Scroll Function
function scrollToWish() {
    document.getElementById('wish-section').scrollIntoView({ behavior: 'smooth' });
    // Start typing after a small delay
    setTimeout(typeMessage, 1000);
}
