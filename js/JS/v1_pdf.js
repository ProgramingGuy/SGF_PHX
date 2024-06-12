  // © Saint Germain Foundation 2024
  // May of 2024 Version 1 of PDF Viewer, discontinued.

  const b1 = document.getElementById('V1');
  const b2 = document.getElementById('V2');
  const b3 = document.getElementById('V3');
  const frame = document.getElementById('Digital-book');

  function status(input) {
    if (frame.style.display === 'none') {
      frame.style.display = 'block';
      frame.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Set PDF src
      if (input === 'V1') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/e6ac4aa9608aa6749dfdbf1a8f0b99b017defca6/assets/Vol1.pdf#toolbar=0&scrollbar=0";
      } else if (input === 'V2') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/e6ac4aa9608aa6749dfdbf1a8f0b99b017defca6/assets/Vol2.pdf#toolbar=0&scrollbar=0";
      } else if (input === 'V3') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/e6ac4aa9608aa6749dfdbf1a8f0b99b017defca6/assets/Vol3.pdf#toolbar=0&scrollbar=0";
         /*
      if (input === 'V1') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/dc311b9c6e276ac385401e5e58a90677fba4c60b/assets/Vol1.pdf#toolbar=0&scrollbar=0";
      } else if (input === 'V2') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/dc311b9c6e276ac385401e5e58a90677fba4c60b/assets/Vol2.pdf#toolbar=0&scrollbar=0";
      } else if (input === 'V3') {
        frame.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/dc311b9c6e276ac385401e5e58a90677fba4c60b/assets/Vol3.pdf#toolbar=0&scrollbar=0";
*/
      }
    } else {
      frame.style.display = 'none';
    }
  }

  b1.addEventListener('click', function() {
    status('V1');
  });

  b2.addEventListener('click', function() {
    status('V2');
  });

  b3.addEventListener('click', function() {
    status('V3');
  });
