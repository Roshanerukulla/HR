const heart = document.getElementById('heart');
const loveMessage = document.getElementById('love-message');

heart.addEventListener('click', () => {
  heart.classList.add('explode');
  loveMessage.style.display = 'block';
});

setTimeout(() => {
  heart.classList.remove('explode');
}, 1000); // Adjust explosion duration
