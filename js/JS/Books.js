// © Saint Germain Foundation 2024
const url = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/';

const audioSelect1 = document.getElementById("audioSelect_v1");
const audioSelect2 = document.getElementById("audioSelect_v2");
const audioSelect3 = document.getElementById("audioSelect_v3");

const audioPlayer1 = document.getElementById("audioPlayer1");
const audioPlayer2 = document.getElementById("audioPlayer2");
const audioPlayer3 = document.getElementById("audioPlayer3");

const audioSource1 = document.getElementById("audioSource1");
const audioSource2 = document.getElementById("audioSource2");
const audioSource3 = document.getElementById("audioSource3");

const audioFiles_v1 = [{
    name: "Foreword",
    src: url + "08d44eef3826406f1f16c197c78ddbd0b791ea90/assets/Vol1/Foreword.mp3"
  },
  {
    name: "Chapter 1",
    src: url + "e7fae4a58ac668b85d2eeb731882ef88771f55f5/assets/Vol1/Chapter-01.mp3"
  },
  {
    name: "Chapter 2",
    src: url + "e7fae4a58ac668b85d2eeb731882ef88771f55f5/assets/Vol1/Chapter-02.mp3"
  },
  {
    name: "Chapter 3",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-03.mp3"
  },
  {
    name: "Chapter 4",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-04.mp3"
  },
  {
    name: "Chapter 5",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-05.mp3"
  },
  {
    name: "Chapter 6",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-06.mp3"
  },
  {
    name: "Chapter 7",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-07.mp3"
  },
  {
    name: "Chapter 8",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-08.mp3"
  },
  {
    name: "Chapter 9",
    src: url + "b5f3ec240740d1a1302ccccc858066dbd11a15bc/assets/Vol1/Chapter-09.mp3"
  },
];



const audioFiles_v2 = [{
    name: "Foreword",
    src: url + "c36191b6e89dbd60ba952f484663b7c5b9e07037/assets/Vol2/Foreword.mp3"
  },
  {
    name: "Chapter 1",
    src: url + "c36191b6e89dbd60ba952f484663b7c5b9e07037/assets/Vol2/Chapter-01.mp3"
  },
  {
    name: "Chapter 2",
    src: url + "c36191b6e89dbd60ba952f484663b7c5b9e07037/assets/Vol2/Chapter-02.mp3"
  },
  {
    name: "Chapter 3",
    src: url + "c36191b6e89dbd60ba952f484663b7c5b9e07037/assets/Vol2/Chapter-03.mp3"
  },
  {
    name: "Chapter 4",
    src: url + "a2a34f52937d0e97874c4b1deb130ad347f6f65e/assets/Vol2/Chapter-04.mp3"
  },
  {
    name: "Chapter 5",
    src: url + "468caa05c45096df36c39fb4bec12fb279070de0/assets/Vol2/Chapter-05.mp3"
  },
  {
    name: "Chapter 6",
    src: url + "468caa05c45096df36c39fb4bec12fb279070de0/assets/Vol2/Chapter-06.mp3"
  },
  {
    name: "Chapter 7",
    src: url + "095dc79d7af3978e947615afe84117ee97c678e1/assets/Vol2/Chapter-07.mp3"
  },
  {
    name: "Chapter 8",
    src: url + "095dc79d7af3978e947615afe84117ee97c678e1/assets/Vol2/Chapter-08.mp3"
  },
  {
    name: "Chapter 9",
    src: url + "095dc79d7af3978e947615afe84117ee97c678e1/assets/Vol2/Chapter-09.mp3"
  },
  {
    name: "Chapter 10",
    src: url + "095dc79d7af3978e947615afe84117ee97c678e1/assets/Vol2/Chapter-10.mp3"
  },
  {
    name: "Chapter 11",
    src: url + "973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol2/Chapter-11.mp3"
  },
];



const audioFiles_v3 = [{
    name: 'Foreword',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Foreword.mp3'
  },
  {
    name: 'Discourse 1',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-01.mp3'
  },
  {
    name: 'Discourse 2',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-02.mp3'
  },
  {
    name: 'Discourse 3',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-03.mp3'
  },
  {
    name: 'Discourse 4',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-04.mp3'
  },
  {
    name: 'Discourse 5',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-05.mp3'
  },
  {
    name: 'Discourse 6',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-06.mp3'
  },
  {
    name: 'Discourse 7',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-07.mp3'
  },
  {
    name: 'Discourse 8',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-08.mp3'
  },
  {
    name: 'Discourse 9',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-09.mp3'
  },
  {
    name: 'Discourse 10',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-10.mp3'
  },
  {
    name: 'Discourse 11',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-11.mp3'
  },
  {
    name: 'Discourse 12',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-12.mp3'
  },
  {
    name: 'Discourse 13',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-13.mp3'
  },
  {
    name: 'Discourse 14',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-14.mp3'
  },
  {
    name: 'Discourse 15',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-15.mp3'
  },
  {
    name: 'Discourse 16',
    src: url + '973bfecaf9e647c28c7df5b270c95a0c9d3b6832/assets/Vol3/Discourse-16.mp3'
  },
  {
    name: 'Discourse 17',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-17.mp3'
  },
  {
    name: 'Discourse 18',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-18.mp3'
  },
  {
    name: 'Discourse 19',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-19.mp3'
  },
  {
    name: 'Discourse 20',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-20.mp3'
  },
  {
    name: 'Discourse 21',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-21.mp3'
  },
  {
    name: 'Discourse 22',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-22.mp3'
  },
  {
    name: 'Discourse 23',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-23.mp3'
  },
  {
    name: 'Discourse 24',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-24.mp3'
  },
  {
    name: 'Discourse 25',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-25.mp3'
  },
  {
    name: 'Discourse 26',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-26.mp3'
  },
  {
    name: 'Discourse 27',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-27.mp3'
  },
  {
    name: 'Discourse 28',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-28.mp3'
  },
  {
    name: 'Discourse 29',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-29.mp3'
  },
  {
    name: 'Discourse 30',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-30.mp3'
  },
  {
    name: 'Discourse 31',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-31.mp3'
  },
  {
    name: 'Discourse 32',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-32.mp3'
  },
  {
    name: 'Discourse 33',
    src: url + '251f176f5a76fc30251b8effd5634d294597a47d/assets/Vol3/Discourse-33.mp3'
  }
];


document.addEventListener("DOMContentLoaded", function() {
  function populateDropdown(audioFiles, selectElement) {
    audioFiles.forEach((audio, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = audio.name;
      selectElement.appendChild(option);
    });
  }

  function setAudioSource(audioElement, sourceElement, audioFiles, index) {
    const source = audioFiles[index].src;
    sourceElement.src = source;
    audioElement.load();

    audioElement.addEventListener('loadedmetadata', function() {
      const seekBarId = 'customSeekBar' + audioElement.id.slice(-1);
      const seekBar = document.getElementById(seekBarId);
      seekBar.value = 0;
    });
  }

  function resetPlayPauseButton(playerId) {
    const playPauseButton = document.querySelector(`#${playerId} .playPauseButton`);
    playPauseButton.src = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/95d2e1ef131bd1841959300e908665d7aa72a9b8/assets/Img/IAM_Play.png';
  }

  function updateAudioTime() {
    const audioId = this.id.replace('customSeekBar', 'audioPlayer');
    const audio = document.getElementById(audioId);
    if (audio) {
      audio.currentTime = (this.value / 100) * audio.duration;
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainderSeconds < 10 ? '0' + remainderSeconds : remainderSeconds;
    return `${minutes}:${formattedSeconds}`;
  }

  // Populating dropdowns
  populateDropdown(audioFiles_v1, audioSelect1);
  populateDropdown(audioFiles_v2, audioSelect2);
  populateDropdown(audioFiles_v3, audioSelect3);

  // Event listeners for dropdowns
  audioSelect1.addEventListener("change", function() {
    const selectedIndex = this.value;
    setAudioSource(audioPlayer1, audioSource1, audioFiles_v1, selectedIndex);
    resetPlayPauseButton('customAudioPlayer1');
  });

  audioSelect2.addEventListener("change", function() {
    const selectedIndex = this.value;
    setAudioSource(audioPlayer2, audioSource2, audioFiles_v2, selectedIndex);
    resetPlayPauseButton('customAudioPlayer2');
  });

  audioSelect3.addEventListener("change", function() {
    const selectedIndex = this.value;
    setAudioSource(audioPlayer3, audioSource3, audioFiles_v3, selectedIndex);
    resetPlayPauseButton('customAudioPlayer3');
  });

  // Play/Pause Button functionality
  document.querySelectorAll('.playPauseButton').forEach(button => {
    button.addEventListener('click', function() {
      const audio = this.parentNode.querySelector('audio');
      if (audio.paused) {
        audio.play();
        this.src = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/cefb44d04013542471ecaa590d45ccfc2b4bfc16/assets/Img/IAM_Pause.png';
      } else {
        audio.pause();
        this.src = 'https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/95d2e1ef131bd1841959300e908665d7aa72a9b8/assets/Img/IAM_Play.png';
      }
    });
  });

  /* Bug fix, error on audio players without time stamp.
  // Time Update
  document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('timeupdate', function() {
      const progressBar = this.parentNode.querySelector('input[type="range"]');
      progressBar.value = (this.currentTime / this.duration) * 100;
      const currentTime = this.parentNode.querySelector('#currentTime' + audio.id.slice(-1));
      currentTime.textContent = formatTime(this.currentTime);
    });
  });

  // Duration Update
  document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('durationchange', function() {
      const duration = this.parentNode.querySelector('#duration' + audio.id.slice(-1));
      duration.textContent = formatTime(this.duration);
    });
  });
  */

  // Time Update - Updated 5/29/2024
  document.querySelectorAll('audio').forEach(audio => {
    const currentTime = document.querySelector('#currentTime' + audio.id.slice(-1));
    if (currentTime) {
      audio.addEventListener('timeupdate', function() {
        const progressBar = this.parentNode.querySelector('input[type="range"]');
        progressBar.value = (this.currentTime / this.duration) * 100;
        currentTime.textContent = formatTime(this.currentTime);
      });
    }
  });


  // Duration Update - if statement added 5/29/2024
  document.querySelectorAll('audio').forEach(audio => {
    const duration = document.querySelector('#duration' + audio.id.slice(-1));
    if (duration) {
      audio.addEventListener('durationchange', function() {
        duration.textContent = formatTime(this.duration);
      });
    }
  });

  // Seekbar functionality
  document.querySelectorAll('input[type="range"]').forEach(seekBar => {
    seekBar.addEventListener('input', updateAudioTime);
    seekBar.addEventListener('change', updateAudioTime);
  });

  // Preload audio for the first file in each array
  preloadAudio(audioPlayer1, audioSource1, audioFiles_v1, 0);
  preloadAudio(audioPlayer2, audioSource2, audioFiles_v2, 0);
  preloadAudio(audioPlayer3, audioSource3, audioFiles_v3, 0);
});


function preloadAudio(audioElement, sourceElement, audioFiles, index) {

  const source = audioFiles[index].src;
  sourceElement.src = source;
  audioElement.load();

  // Reset time scroller to zero after loading
  audioElement.onloadeddata = function() {
    audioElement.currentTime = 0;
  };
}
