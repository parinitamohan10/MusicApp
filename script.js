console.log("Welcome to Spotify");

//Intialize the variables
let songIndex = 0;
let audioElement = new Audio(
  "songs\\1.mp3"
);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Let Me Love You",
    filepath: "songs\\1.mp3",
    coverPath: "covers\\1.jpg",
  },
  {
    songName: "That's What I Like",
    filepath:
      "songs\\2.mp3",
    coverPath: "covers\\2.jpg",
  },
  {
    songName: "Attention",
    filepath:
      "songs\\3.mp3",
    coverPath: "covers\\3.jpg",
  },
  {
    songName: "We Don't Talk Anymore",
    filepath:
      "songs\\ridonezz_charlie-puth-we-don-t-talk-anymore-feat-selena.mp3",
    coverPath: "covers\\4.jpg",
  },
  {
    songName: "Worth It",
    filepath:
      "songs\\ridonezz_fifth-harmony-wort-it.mp3",
    coverPath: "covers\\5.jpg",
  },
  {
    songName: "Drag Me Down",
    filepath:
      "songs\\ridonezz_one-direction-drag-me-down.mp3",
    coverPath: "covers\\6.jpg",
  },
  {
    songName: "Cheap Thrills",
    filepath:
      "songs\\ridonezz_sia-feat-sean-paul-cheap-thrills.mp3",
    coverPath: "covers\\7.jpg",
  },
  {
    songName: "Don't Let Me Down",
    filepath:
      "songs\\ridonezz_the-chainsmokers-don-t-let-me-down.mp3",
    coverPath: "covers\\8.jpg",
  },
  {
    songName: "Closer",
    filepath:
      "songs\\ridonezz_the-chainsmokers-ft-haley-closer.mp3",
    coverPath: "covers\\9.jpg",
  },
];
songItems.forEach((ele, i) => {
  ele.getElementsByTagName("img")[0].src = songs[i].coverPath;
  ele.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//handle play pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to events
audioElement.addEventListener("timeupdate", () => {
  //update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
//progress bar change according to ourselves
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlay();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `songs/${index}.mp3`;
      audioElement.currentTime = 0;
    });
  }
);
