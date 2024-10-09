window.onload = init;

function init() {
    let video = document.getElementById("video");
    let source = document.createElement("source");
    source.type = "video/mp4";
    if(document.documentElement.clientWidth < 1024)
        source.src = "../videos/sortie_escalade_confinee480.mp4";
    else
        source.src = "../videos/sortie_escalade_confinee.mp4";
    video.appendChild(source);
}