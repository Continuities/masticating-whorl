const video = document.getElementById('video');

video.addEventListener('loadeddata', () => {
  if (video.readyState >= 1) {
    video.currentTime = Math.random() * video.duration;
  }
});

video.addEventListener('click', () => {
  if (video.paused){
    video.play();
    document.getElementById('video-wrap').className = 'playing';
  }
  else {
    video.pause();
    document.getElementById('video-wrap').className = '';
  }
});

video.load();