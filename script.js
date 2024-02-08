// For index.html interactions
function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var noButton = document.getElementById('noButton');
    if (noButton) {
        var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        var y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute'; 
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.URL.includes('yes.html')) {
        const jsConfetti = new JSConfetti({ canvasId: 'confetti' });
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
            emojiSize: 120, // Increased size from 100 to 120 for larger confetti
            confettiNumber: 100,
            confettiRadius: 6, // Increase radius for bigger confetti pieces
            confettiColors: ['#ff0', '#f0f', '#0ff', '#0f0'], // Example colors, adjust as needed
            origin: { y: 0.7 } // Adjust vertical position to center on most screens
        });
    }
});
