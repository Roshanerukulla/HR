document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('heart').style.display = 'none';
    document.getElementById('explosion').style.display = 'block';

    setTimeout(function() {
        document.getElementById('explosion').style.display = 'none';
        alert("I love you!");
        // You can replace the alert with any other action you desire
        // For example, you can dynamically add a message to the DOM.
    }, 1000); // Adjust the timeout based on the explode animation duration
});
