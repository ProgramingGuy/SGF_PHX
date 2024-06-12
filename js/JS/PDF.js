 // © Saint Germain Foundation 2024
 // Updated PDF viewer code 5/31/2024 --- V2
  const frame = document.getElementById('Digital-book');
  const base = "https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/ProgramingGuy/SGF_PHX/e6ac4aa9608aa6749dfdbf1a8f0b99b017defca6/assets/";
  const books = {
    V1: `${base}Vol1.pdf#toolbar=0&scrollbar=0`,
    V2: `${base}Vol2.pdf#toolbar=0&scrollbar=0`,
    V3: `${base}Vol3.pdf#toolbar=0&scrollbar=0`
  };

  function toggleFrame(input) {
    const currentSrc = frame.src;

    if (frame.style.display === 'none' || !currentSrc || currentSrc !== books[input]) {
      frame.style.display = 'block';
      frame.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      if (input && books[input]) {
        frame.src = books[input];
      }
    } else {
      frame.style.display = 'none';
    }
  }

  document.querySelectorAll('.purchase-button').forEach(button => {
    const book = button.getAttribute('book');
    if (book) {
      // console.log(book);
      button.addEventListener('click', function() {
        toggleFrame(book);
      });
    }
  });
