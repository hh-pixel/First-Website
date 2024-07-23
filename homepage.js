const button = document.getElementById("myButton"); // Assuming your button has id "myButton"

hasmouseclicked = false;

button.addEventListener("click", function () {
  button.innerHTML = "Get Rickrolled!";
  hasmouseclicked = true;
});

myaudio = document.getElementById("myaudio");

audioplayed = 0;

button.addEventListener("mouseover", function () {
  if (hasmouseclicked) {

    myaudio.play();
    button.style.position = "absolute";
    button.style.zIndex = 1;
    
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
  
    const randomX = Math.random() * (screenWidth - buttonWidth);
    const randomY = Math.random() * (screenHeight - buttonHeight);
  
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    setTimeout(pauseAudio, 15000);
  }
});

function pauseAudio(){
  myaudio.pause();
}







