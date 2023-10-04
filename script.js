const rickrollButton = document.getElementById('rickroll-btn');

rickrollButton.addEventListener('click', () => {
    const isConfirmed = confirm("Are you sure you want to get Rickrolled?");

    if (isConfirmed) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
        alert("Good choice! No Rickrolling for you today.");
    }
});
