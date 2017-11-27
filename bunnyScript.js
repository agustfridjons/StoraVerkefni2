//Myndband
var myndband = document.getElementById('video');

//Til baka takki
var backButton = document.querySelector('.back');
backButton.addEventListener('click', function() {
  myndband.currentTime -= 3;
});

//Spila pásu takki overlay
var playPauseButtonB = document.querySelector('.playpauseB');
var mshade = document.querySelector('.myndband');
playPauseButtonB.addEventListener('click', function() {
  if (myndband.paused) {
      myndband.play();
      breytaplaypauseMyndA();
      mshade.classList.remove('shade');
      playPauseButtonB.classList.add('hidden');
  }
  else {
      myndband.pause();
      breytaplaypauseMyndA();
      mshade.classList.add('shade');
      playPauseButtonB.classList.remove('hidden');
    }
});

//Spila/Pásu takki undir
var playPauseButtonA = document.querySelector('.playpauseA');
playPauseButtonA.addEventListener('click', function() {
  if (myndband.paused) {
      myndband.play();
      mshade.classList.remove('shade');
      playPauseButtonB.classList.add('hidden');
  }
  else {
      myndband.pause();
      mshade.classList.add('shade');
      playPauseButtonB.classList.remove('hidden');
    }
});
var playpauseMyndA = document.getElementById('playpauseA');
function breytaplaypauseMyndA() {
  if (playpauseMyndA.getAttribute('src') == "play.svg") {
    playpauseMyndA.src = "pause.svg";
  } else {
    playpauseMyndA.src = "play.svg";
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
