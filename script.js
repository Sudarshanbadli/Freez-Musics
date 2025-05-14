const playlistItems = document.querySelectorAll(".playlist-item");
const likeBtns = document.querySelectorAll(".like-btn");
const audioPlayer = document.getElementById("audioPlayer");
const volumeRange = document.getElementById("volume-range");
const progressBar = document.getElementById("progress-bar");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

let currentSongIndex = 2;
let isSongLoaded = false;

const songs = [
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Ajay-Atul_-_O_Saiyyan_Best_Video_Agneepath_Priyanka_Chopra_Hrithik_Roop_Kumar_Rathod(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Arijit_Singh_-_Humari_Adhuri_Kahani_-_full_song___Emraan_Hashmi__Vidya_Balan(MP3_160K)%5B2%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Full_Video__Raanjhan___Do_Patti___Kriti_Sanon__Shaheer_Sheikh___Parampara_Tandon___Sachet-Parampara(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Full_Video__Samayama_Song___Hi_Nanna___Nani_Mrunal_Thakur___Shouryuv___Hesham_Abdul_Wahab(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/JAILER_-_Rathamaarey_Video___Superstar_Rajinikanth___Sun_Pictures___Anirudh__Nelson__Vishal_Mishra(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Kalank_Title_Track_-_Lyrical___Alia_Bhatt___Varun_Dhawan___Arijit_Singh___Pritam__Amitabh(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Khoobsurat___Stree_2___Varun_Dhawan___Shraddha_Kapoor___Rajkummar_Rao___Sachin-Jigar___Vishal_Mishra(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Romantic_Love_Mashup_2024___VDJ_Ayush___DJ_Harshal___Arijit_Singh_Songs___Best_Of_Love_Songs_2024(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Tu_Hain_Toh___Mr.___Mrs._Mahi___Rajkummar_Rao__Janhvi_Kapoor___Hunny__Bunny__Sagar___Team_Jaani(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Tumhare_Hi_Rahenge_Hum_-Stree2___Shraddha_Kapoor___Rajkummar_Rao___Sachin-Jigar_Varun_Shilpa_Amitabh(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Vazhithunaiye_Video_Song___Dragon___Pradeep_Ranganathan__Kayadu___Ashwath_Marimuthu___Leon_James(MP3_160K)%5B2%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Ye_Tune_Kya_Kiya_-_Javed_Bashir_(Lyrics)___Lyrical_Bam_Hindi(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Zindagi_Kuch_Toh_Bata_(Reprise)_Full_Song_with_LYRICS_Pritam___Salman_Khan___Bajrangi_Bhaijaan(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Luka_Chuppi_-_Lyrical_Song___Rang_De_Basanti___Aamir_Khan___Lata_Mangeshkar___A.R._Rahman(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Ishq_Hai_(Official_Music_Video)___Mismatched_Season_3___A_Netflix_Series___Anurag_Saikia(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Kasturi___Amar_Prem_Ki_Prem_Kahani___Arijit_Singh___Prasad_S___Jio_Cinema(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Sahiba_(Music_Video)_Jasleen_Royal__Vijay_Deverakonda_Radhikka_Madan_Stebin__Priya_Aditya__Sudhanshu(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Pathu_Thala_-_Nee_Singam_Dhan_Video___Silambarasan_TR___A._R_Rahman___Gautham_Karthik(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Tum_Kya_Mile-Full_Video___Rocky_Aur_Rani_Kii_Prem_Kahaani__Ranveer_Alia_Arijit_Shreya_Pritam_Amitabh(MP3_160K)%5B1%5D.mp3",
  "https://github.com/Sudarshanbadli/music-files/raw/refs/heads/main/Rasiya_-_Lyric_Video__Brahm%C4%81stra__Amitabh__Ranbir__Alia__Pritam__Tushar__Shreya(MP3_160K)%5B1%5D.mp3",
];

var swiper = new Swiper(".swiper", {
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 9,
    perSlideRotate: 3,
  },
  grabCursor: true,
  speed: 700,
  initialSlide: 2,
});

swiper.on("slideChange", () => {
  const newIndex = swiper.realIndex;
  if (newIndex !== currentSongIndex) {
    currentSongIndex = newIndex;
    loadAndPlaySong(currentSongIndex);
    updatePlayPauseIcon(true);
  }
});

function updateSwiperToMatchSong(index) {
  if (swiper.activeIndex !== index) {
    swiper.slideTo(index);
  }
}

function updatePlaylistHighlight(index) {
  playlistItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active-playlist-item");
    } else {
      item.classList.remove("active-playlist-item");
    }
  });
}

function loadAndPlaySong(index) {
  audioPlayer.src = songs[index];
  playSong();
  updatePlaylistHighlight(index);
  updateSwiperToMatchSong(index);
  isSongLoaded = true;
}

function pauseSong() {
  audioPlayer.pause();
  updatePlayPauseIcon(false);
}

function playSong() {
  audioPlayer.play();
  updatePlayPauseIcon(true);
}

function togglePlayPause() {
  if (!isSongLoaded) {
    loadAndPlaySong(currentSongIndex);
    isSongLoaded = true;
  } else if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function updatePlayPauseIcon(isPlaying) {
  if (isPlaying) {
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
  } else {
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSongIndex = index;
    loadAndPlaySong(index);
  });
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audioPlayer.addEventListener("loadedmetadata", () => {
  progressBar.max = audioPlayer.duration;
  progressBar.value = audioPlayer.currentTime;
});

audioPlayer.addEventListener("timeupdate", () => {
  if (!audioPlayer.paused) {
    progressBar.value = audioPlayer.currentTime;
  }
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
});

progressBar.addEventListener("change", () => {
  playSong();
});

volumeRange.addEventListener("input", () => {
  var newVolume = volumeRange.value;
  audioPlayer.volume = newVolume / 100;
});

audioPlayer.addEventListener("ended", nextSong);

shuffleBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  if (randomIndex !== currentSongIndex) {
    currentSongIndex = randomIndex;
    loadAndPlaySong(currentSongIndex);
  } else {
    const nextRandomIndex = (randomIndex + 1) % songs.length;
    currentSongIndex = nextRandomIndex;
    loadAndPlaySong(currentSongIndex);
  }
});

likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    likeBtn.classList.toggle("fa-regular");
    likeBtn.classList.toggle("fa-solid");
  });
});
