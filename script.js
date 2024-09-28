let jukebox = document.querySelector("ul.player");
jukebox.addEventListener('click', (e) => {
  let audioPlayer = document.createElement("audio")
  let songName = e.target.getAttribute("data-src")
  audioPlayer.id = "player";
  e.target.id = "playing"
  audioPlayer.src = songName;
  document.body.appendChild(audioPlayer);
  audioPlayer.play();
})




