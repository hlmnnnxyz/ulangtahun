function showSurprise() {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    surprise.style.display = 'block';

    // Optional: Animation for showing surprise
    surprise.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        opacity += 0.05;
        surprise.style.opacity = opacity;
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
    }, 50);

    // Generate flying emojis
    generateFlyingEmojis();
}

function generateFlyingEmojis() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['🎉', '🎂', '💖', '🎈', '✨', '🥳', '🎁']; // List of emojis

    // Generate 20 emojis
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Random position and size for each emoji
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = (Math.random() * 3 + 3) + 's'; // Duration between 3s to 6s
        emoji.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem'; // Size between 1.5rem to 3rem
        emojiContainer.appendChild(emoji);

        // Remove emoji after animation ends to prevent memory leak
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }
}
