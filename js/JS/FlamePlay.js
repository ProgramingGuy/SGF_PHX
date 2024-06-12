document.addEventListener('visibilitychange', function() {
  var video = document.getElementById('background-video');
  if (!video) {
    // console.error("Video element not found!");
    return;
  }
  if (document.visibilityState === 'hidden') {
    if (!video.paused) {
      video.pause();
      // console.log("Video paused.");
    }
  } else {
    if (video.paused) {
      video.play();
      // console.log("Video played.");
    }
  }
});
