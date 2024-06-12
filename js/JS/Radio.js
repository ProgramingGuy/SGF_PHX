// © Saint Germain Foundation 2024
document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('music');
    var playmusic = document.getElementById('button-music');

    var voice = document.getElementById('voice');
    var playvoice = document.getElementById('button-voice');

    var flame = document.getElementById('flame');
    var playflame = document.getElementById('button-flame');
    var playImg = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/95d2e1ef131bd1841959300e908665d7aa72a9b8/assets/Img/IAM_Play.png';
    var pauseImg = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/cefb44d04013542471ecaa590d45ccfc2b4bfc16/assets/Img/IAM_Pause.png';

    // 5/31/2024 Fix for audio load on webpage load and change for audio src keep assign each time played...

    function togglePlayPause(audio, button) {
      var src = audio.getAttribute('data-src');
      if (audio.paused) {
        if (src) {
          if (audio.src === "") {
            audio.src = src;
          }
          audio.play();
          button.src = pauseImg;
        }
      } else {
        audio.pause();
        button.src = playImg;
      }
    }

    playmusic.addEventListener('click', function() {
      togglePlayPause(music, playmusic);
    });

    playvoice.addEventListener('click', function() {
      togglePlayPause(voice, playvoice);
    });

    playflame.addEventListener('click', function() {
      togglePlayPause(flame, playflame);
    });
  });
