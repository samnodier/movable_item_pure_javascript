// Initialize some global variables to be used in the script

const ball = document.querySelector('.ball');
let initialX = 0, initialY = 0, finalX = 0, finalY = 0;

ball.addEventListener('mousedown', dragOnMouseDown);

function dragOnMouseDown(e) {
  e.preventDefault();
  // Get the initial mouse position as long as it's clicked
  initialX = e.clientX;
  initialY = e.clientY;

  // Destroy the event when the mouse is released
  document.addEventListener('mouseup', destroyDragOnMouseDown);

  // Move the ball as long as the mouse is still pressed
  document.addEventListener('mousemove', moveBall);
}

function moveBall(e) {
  e.preventDefault();
  finalX = initialX - e.clientX;
  finalY = initialY - e.clientY;
  initialX = e.clientX;
  initialY = e.clientY;

  // Set the ball new position
  ball.style.top = `${ball.offsetTop - finalY}px`;
  ball.style.left = `${ball.offsetLeft - finalX}px`;
}

// Destroy both events usign .off() method
function destroyDragOnMouseDown() {
  document.removeEventListener('mouseup', destroyDragOnMouseDown);
  document.removeEventListener('mousemove', moveBall);
}