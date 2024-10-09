window.onload = initialisation;

var audio, btnLecture, icoLecture, sliderVolume, sliderAvancement, btnVolPlus, btnVolMoins, volAct, temps, m, s, duree;

function initialisation() {
  audio = document.getElementById("lecteurAudio");

  //bouton lecture/pause
  btnLecture = document.getElementById("lecture");
  icoLecture = document.getElementById("icoLecture");
  btnLecture.addEventListener("click", lecturePause);
  
  //volume
  btnVolPlus = document.getElementById("volumePlus");
  btnVolMoins = document.getElementById("volumeMoins");
  volAct = document.getElementById("volumeActuel");
  sliderVolume = document.getElementById("volume");
  btnVolPlus.addEventListener("click", volumePlus);
  btnVolMoins.addEventListener("click", volumeMoins);
  sliderVolume.addEventListener("change", volumeChange);
  
  //avancement
  sliderAvancement = document.getElementById("avancement");
  sliderAvancement.max = audio.duration;
  temps = document.getElementById("temps");
  audio.addEventListener("timeupdate", avancement);
  sliderAvancement.addEventListener("change", tempsChange);
  sliderAvancement.addEventListener("mousedown", debutChangementAvancement);
  sliderAvancement.addEventListener("mouseup", finChangementAvancement);
  audio.addEventListener("ended", pause);
  var sd = parseInt(audio.duration) % 60;
  duree = " / " + parseInt(audio.duration / 60) + ":" + (sd<10?"0":"") + sd;
  temps.innerHTML = "0:00" + duree;
}

/*Avancement*/
function avancement() {
  sliderAvancement.value = parseInt(audio.currentTime);
  m = parseInt(sliderAvancement.value / 60);
  s = parseInt(sliderAvancement.value) % 60;
  temps.innerHTML = m + ":" + (s<10?"0":"") + s + duree;
}

function tempsChange() {
  audio.currentTime = sliderAvancement.value;
  sliderAvancement.setAttribute("aria-valuetext", m + " minute " + s);
}

function debutChangementAvancement() {
  audio.removeEventListener("timeupdate", avancement);
}

function finChangementAvancement() {
  audio.addEventListener("timeupdate", avancement);
}

/* Lecture et pause */
function lecturePause() {
  if (audio.paused) {
    audio.play();
    icoLecture.className = "far fa-pause-circle";
    btnLecture.setAttribute("aria-label", "pause");
  } else {
    audio.pause();
    pause();
  }
}

function pause() {
  icoLecture.className = "far fa-play-circle";
  btnLecture.setAttribute("aria-label", "lecture");
}

/* volume */
function volumeChange() {
  audio.volume = sliderVolume.value / 100;
  volAct.innerHTML = "volume " + sliderVolume.value + "%";
}

function volumeMoins() {
  sliderVolume.value = Math.max(0, (audio.volume * 100) - 10);
  volumeChange();
}

function volumePlus() {
  sliderVolume.value = Math.min(100, (audio.volume * 100) + 10);
  volumeChange();
}
