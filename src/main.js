import "./style.css";
import "./modules/page-principale/animDegradeBG.js"

//code pour la fonction vidéo d'arrière-plan (Jason)
const games = ["G-Smash", "G-Sun", "G-RE4", "P-Silent", "P-GTA", "P-Metal", "P-Gt4", "X-Halo1", "X-Halo2"];
const videos = ["videos/GC-Smash.mp4", "videos/CG-Mario.mp4", "videos/GC-RE.mp4", "videos/PS2-SH.mp4", "videos/PS2-GTA.mp4", "videos/PS2-MGS.mp4", "videos/PS2-GT4.mp4", "videos/XBOX-HALO1.mp4", "videos/XBOX-HALO2.mp4"];

const videoBG = document.getElementsByClassName("back-Video")[0];
let anyHovered = false;

function videoPlaying(play) {
    if (play) 
    {
        videoBG.style.opacity = 1;
        videoBG.play();
    }
    else 
    {
        videoBG.style.opacity = 0;
        videoBG.currentTime = 0;
        videoBG.pause();
    }
}

document.addEventListener("mouseover", () => 
{
    anyHovered = false;
    games.forEach(game => 
    {
        const gameElement = document.getElementsByClassName(game)[0];
        if (gameElement.matches(":hover")) 
        {
            anyHovered = true;
            videoBG.src = videos[games.indexOf(game)];
            videoPlaying(true);
        }
    });
    if (!anyHovered) {
        videoPlaying(false);
    }
})