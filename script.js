document.getElementById('yes-btn').addEventListener('click', function() {
  // Hide the entire content except the GIF
  document.getElementById('question').style.display = 'none';  // Hide the question text
  document.getElementById('image1').style.display = 'none';    // Hide the initial image
  document.getElementById('yes-btn').style.display = 'none';   // Hide the "Yes" button
  document.getElementById('no-btn').style.display = 'none';    // Hide the "No" button

  // Show the GIF
  var gif = document.getElementById('gif');
  gif.src = "hehe.gif"; // Example GIF URL
  gif.onload = function() {
    // This ensures the GIF is loaded before showing it
    gif.style.display = 'block'; // Show the GIF after it loads
  };
  gif.onerror = function() {
    console.error("GIF failed to load");
    gif.style.display = 'none'; // Hide GIF if it fails to load
  };
});

document.getElementById('no-btn').addEventListener('mouseenter', function() {
  // Make the "No" button move to a new location when hovered over
  let noButton = document.getElementById('no-btn');
  let randomX = Math.floor(Math.random() * 70) + '%'; // Random X position
  let randomY = Math.floor(Math.random() * 70) + '%'; // Random Y position
  noButton.style.position = 'absolute';
  noButton.style.top = randomY;
  noButton.style.left = randomX;
});
