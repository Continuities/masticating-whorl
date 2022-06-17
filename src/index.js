const player = new Vimeo.Player('video', {
  // url: 'https://vimeo.com/665354372?h=56650862bd'
  url: 'https://vimeo.com/717945664',
  controls: false,
  loop: true
});

(async () => {
  const duration = await player.getDuration();
  player.setCurrentTime(duration * Math.random());
})();

document.getElementById('video').addEventListener('click', async () => {
  if (await player.getPaused()) {
    player.play();
    document.getElementById('video-wrap').className = 'playing';
  }
  else {
    player.pause();
    document.getElementById('video-wrap').className = '';
  }
});