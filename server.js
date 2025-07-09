
let songs;
let currentfolder;

/*  reusable renderer so we can redraw the list anytime */
function renderSongList(songsArr) {
  const ul = document.querySelector(".listsongs ul");
  ul.innerHTML = ""; // wipe old rows

  for (const song of songsArr) {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li data-track="${song}">
        <div class="outerbox1">
        <h4>${song.replaceAll("%20", " ")}</h4>
        <h6>Bhiravudu</h6>
        </div>
       <div class="outerbox2">
        <span>Play Now
        <img src="images/playbutotnsimages/play.svg" alt="">
        </span>
       </div>     </li>`
    );
  }
}
async function getsongs(folder) {
  currentfolder = folder;
  let a = await fetch(`/${folder}/`);
  let response = await a.text();
  console.log(response);
  let raza = document.createElement("div");
  raza.innerHTML = response;
  let atags = raza.getElementsByTagName("a");    // songs are in links so collect all a tags
  let basket = [];
  for (let i = 0; i < atags.length; i++) {
    let checkforatag = atags[i];
    if (checkforatag.href.endsWith(".mp3")) {
      basket.push(checkforatag.href.split(`/${folder}/`)[1]);
    }
  }
  return basket;
}

async function main() {
 
  songs = await getsongs("songs/ts");
  currentfolder = "songs/ts";
  renderSongList(songs);


  const player = new Audio(); // never create more than one!, use player any where in this file

  let currentsong = null; // <li> that’s playing (li is the playing song)

  document.querySelector(".listsongs").addEventListener("click", (e) => {
    const li = e.target.closest("li[data-track]");
    if (!li) return; // clicked outside a song row

    // stop previous song
    player.pause();

    if (currentsong != null && currentsong !== li) {
      const oldsong = currentsong.querySelector(".outerbox2 span");
      oldsong.innerHTML =
        'Play Now<img src="images/playbutotnsimages/play.svg" alt="">';
    }

    // load & play the new one
    const file = li.dataset.track; // e.g. My%20Song.mp3
    player.src = `/${currentfolder}/` + file;
    document.getElementById("play").src = "images/playbutotnsimages/pause.svg";
    document.getElementById("fsplay").src =
      "images/playbutotnsimages/pause.svg";
    player.play();

    // ----- update mini-player UI -----
    document.getElementById("miniTitle").innerText = decodeURIComponent(
      file
    ).replace(".mp3", "");
    document.getElementById("miniArtist").innerText =
      li.dataset.artist || "Unknown";

    document.getElementById("play").src = "images/playbutotnsimages/pause.svg";

    currentsong = li;

    //adding full player (its the aditional one when clicked to listsongs it comes on screen)

    //getting some data and assing it to variables
    const fullscreenPlayer = document.getElementById("fullscreenPlayer");
    const songtitle = document.getElementById("fullscreenSongTitle");
    const artist = document.getElementById("fullscreenArtist");
    // const albumArtSrc = `/songs/${folder}/album-art.jpg`
    //assining real data to variables
    songtitle.innerHTML = decodeURIComponent(file).replace(".mp3", "");
    artist.innerHTML = li.dataset.artist || "Bhiravudu";


    fullscreenPlayer.classList.add("active");

    // Close button
    const closeBtn = document.getElementById("closeFullscreen");
    closeBtn.addEventListener("click", function () {
      fullscreenPlayer.classList.remove("active");
    });
  });

  // reuse the orginal playbar here (write outside of listsongs eventlistner to avoid the mutiple clicks)
  const fsPlay = document.getElementById("fsplay");
  const fsPrev = document.getElementById("fsprevious");
  const fsNext = document.getElementById("fsnext");
  const fsTimer = document.getElementById("fsTimer");
  const fsSeekbar = document.getElementById("fsSeekbar");
  const fsCircle = document.getElementById("fsCircle");

  fsPlay.addEventListener(
    "click",
    () => document.getElementById("play").click() //we r reusing the same eventlistner (like virtual functions or they r calling other function)
  );

  fsPrev.addEventListener("click", () =>
    document.getElementById("previous").click()
  );

  fsNext.addEventListener("click", () =>
    document.getElementById("next").click()
  );

  fsSeekbar.addEventListener("click", (e) => {
    const pct = e.offsetX / fsSeekbar.getBoundingClientRect().width;
    player.currentTime = pct * player.duration;
  });

  player.addEventListener("timeupdate", () => {
    if (!player.duration) return;
    fsTimer.textContent =
      (player.currentTime / 60).toFixed(2) +
      " / " +
      (player.duration / 60).toFixed(2);
    fsCircle.style.left = (player.currentTime / player.duration) * 100 + "%";
  });

  // Adding event listner to the playbutton to play and stop the song

  document.getElementById("play").addEventListener("click", () => {
    if (player.paused) {
      player.play();
      document.getElementById("play").src =
        "images/playbutotnsimages/pause.svg";
      document.getElementById("fsplay").src =
        "images/playbutotnsimages/pause.svg";
    } else {
      player.pause();
      document.getElementById("play").src = "images/playbutotnsimages/play.svg";

      document.getElementById("fsplay").src =
        "images/playbutotnsimages/play.svg";
    }
  });
  // song ends retuns the img to again normal play
  player.addEventListener("ended", () => {
    document.getElementById("play").src = "images/playbutotnsimages/play.svg";
  });

  // Adding timer
  player.addEventListener("timeupdate", () => {
    document.querySelector(".timer").innerHTML =
      (player.currentTime / 60).toFixed(2) +
      " / " +
      (player.duration / 60).toFixed(2);
    document.querySelector(".circle").style.left =
      ((player.currentTime / 60).toFixed(2) /
        (player.duration / 60).toFixed(2)) *
        100 +
      "%";
  });

  // seekbar responses
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    player.currentTime = (player.duration * percent) / 100;
  });

  // Add event listner for play , next and prev

  /* helper: click the <li> for a given file name */
  function clickRowByFile(file) {
    const li = document.querySelector(`li[data-track="${file}"]`);
    if (li) li.click(); // re-use your existing listener
  }

  previous.addEventListener("click", () => {
    const file = player.src.split("/").slice(-1)[0]; // current file
    const index = songs.indexOf(file);
    if (index > 0) clickRowByFile(songs[index - 1]);
  });

  next.addEventListener("click", () => {
    const file = player.src.split("/").slice(-1)[0];
    const index = songs.indexOf(file);
    if (index < songs.length - 1) clickRowByFile(songs[index + 1]);
  });

  // Add volume bar
  const bar = document.getElementById("volumebar");
  bar.addEventListener("input", () => {
    player.volume = bar.value;

    if (bar.value == 0) {
      document.getElementById("volume").src = "images/mute.svg";
    } else {
      document.getElementById("volume").src = "images/volume.svg";
    }
  });

  const vol = document.getElementById("volume");
  vol.addEventListener("click", () => {
    if (player.volume === 0) {
      player.volume = 0.3;
      bar.value = 0.3;
      document.getElementById("volume").src = "images/volume.svg";
    } else {
      player.volume = 0;
      bar.value = 0;
      document.getElementById("volume").src = "images/mute.svg";
    }
  });
}

main();

document.querySelector(".threedots").addEventListener("click", () => {
  document.querySelector(".left").style.transform = "translateX(0%)";
});

document.querySelector(".closeicon").addEventListener("click", (e) => {
  document.querySelector(".left").style.transform = "translateX(-100%)";
});


document.querySelector(".bigbox").addEventListener("click", async (e) => {
  const card   = e.target.closest(".box");
  if (!card) return;                 // clicked empty space

  const folder = card.dataset.folder;
  if (!folder || folder === currentfolder) return;

  // fetch, remember, and redraw
  songs         = await getsongs(folder);
  currentfolder = folder;
  renderSongList(songs);


});