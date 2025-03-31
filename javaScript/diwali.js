function showGreeting() {
    // Display a greeting alert
    alert('Happy Diwali! May your life be filled with light and joy.');

    // Add confetti effect
    createConfetti();
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti-container');
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.remove();
    }, 5000);
}

// Generate random bright colors for confetti
function getRandomColor() {
    const colors = ['#ffcc29', '#ff914d', '#fdd835', '#ff6b6b', '#ffdd59'];
    return colors[Math.floor(Math.random() * colors.length)];
}
