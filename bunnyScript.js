//Myndband
var myndband = document.getElementById('video');

//Til baka takki
var backButton = document.querySelector('.back');
backButton.addEventListener('click', function() {
  myndband.currentTime -= 3;
});

//Spila/Pásu takki
var playPauseButton = document.querySelector('.playpause');
playPauseButton.addEventListener('click', function() {
  if (myndband.paused) {
      myndband.play();
  }
  else {
      myndband.pause();
    }
});
var playpauseMynd = document.getElementById('playpause');
function breytaplaypauseMynd() {
  if (playpauseMynd.getAttribute('src') == "play.svg") {
    playpauseMynd.src = "pause.svg";
  } else {
    playpauseMynd.src = "play.svg";
  }
}

//Slökkva/Kveikja á hljóði takki
var muteButton = document.querySelector('.muteunmute');
muteButton.addEventListener('click', function() {
  if (myndband.muted == false) {
      myndband.muted = true;
  } else {
      myndband.muted = false;
  }
});
var muteunmuteMynd = document.getElementById('muteunmute');
function breytamuteunmuteMynd() {
  if (muteunmuteMynd.getAttribute('src') == "mute.svg") {
    muteunmuteMynd.src = "unmute.svg";
  } else {
    muteunmuteMynd.src = "mute.svg";
  }
}

//Fullscreen takki
var fullscreenButton = document.querySelector('.fullscreen');
fullscreenButton.addEventListener('click', function() {
  if (myndband.requestFullscreen) {
    myndband.requestFullscreen;
  } else {
    myndband.webkitRequestFullscreen();
  }
});

//Áfram takki
var nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function() {
  myndband.currentTime += 3;
});
