document.getElementById('heart').addEventListener('click', function() {
    this.style.animation = 'explode 0.5s forwards';
    setTimeout(() => {
      this.innerHTML = 'I love you!';
      this.style.animation = ''; // Reset animation to prevent continuous pulsating
    }, 500);
  });
  