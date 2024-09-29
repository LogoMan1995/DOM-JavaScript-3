let jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', (e) => {
  let songName = e.target.getAttribute('data-src');
  let songPlaying = document.querySelector('#player');

  if (songPlaying) {
    if (songName === songPlaying.getAttribute('src')) {

      if (songPlaying.paused) {
        songPlaying.play();
        e.target.id = 'playing';
      } else {
        songPlaying.pause();
        e.target.id = 'paused';
      }
    } else {

      songPlaying.src = songName;
      songPlaying.play();
      document.querySelector('[id="playing"]')?.removeAttribute('id');
      e.target.id = 'playing';
    }
  } else {

    let audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();

    audioPlayer.addEventListener('ended', () => {
      e.target.id = '';
      audioPlayer.parentNode.removeChild(audioPlayer);
    });
  }
});
