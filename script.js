const mockTracks = {
  study: [
    { title: "Study Beats", url: "https://www.youtube.com/live/DfSkKYQiwoU?si=SsZ-1OIzyjxb5I1y" },
    { title: "Chillhop Essentials", url: "https://www.youtube.com/live/CoQfichK5Iw?si=assV-fqMhFEoJyWN" }
  ],
  coding: [
    { title: "Coding Music Mix", url: "https://youtu.be/xTgee06CgLg?si=AfhdaerirUPvs21R" },
    { title: "Synthwave Coding", url: "https://youtu.be/NQKC24th90U?si=P18aQ5cCy64vmBYS" }
  ],
  writing: [
    { title: "Peaceful Classical", url: "https://youtu.be/QZTDZFtbrec?si=GbzJmZGc0V-9hiUm" },
    { title: "Acoustic Chill Tune", url: "https://youtu.be/htnobkrtDoo?si=M-uQ8QcEfeDKEJKA" }
  ],
  relax: [
    { title: "Nature Sounds", url: "https://www.youtube.com/watch?v=OdIJ2x3nxzQ" },
    { title: "Deep Focus Music", url: "https://youtu.be/I3OJUwILelU?si=cnaqU47Szdlu8nBY" }
  ],
  reading: [
    { title: "Piano JAZZ", url: "https://www.youtube.com/live/p-msTt8PkoE?si=oZvWl99LSXJrAbm6" },
    { title: "Cozy Reading", url: "https://youtu.be/HPyu0PGqGkU?si=QODkg3HP65pi4ABU" }
  ],
  household_work: [
    { title: "Calming Music", url: "https://youtu.be/lFcSrYw-ARY?si=BQGBNLRLTQBxg39j" },
    { title: "Relaxing Soul Play", url: "https://youtu.be/LjOewfgdM18?si=F28JQ686ID5uRDcI" }
  ]
};

function generatePlaylist() {
  const task = document.getElementById("task").value;
  const mood = document.getElementById("mood").value;
  const energy = document.getElementById("energy").value;

  const playlistEl = document.getElementById("playlist");
  playlistEl.innerHTML = `<h3>🎵 Your Focus Playlist:</h3>`;

  const tracks = mockTracks[task];
  tracks.forEach(track => {
    const div = document.createElement("div");
    div.className = "track";
    div.innerHTML = `<a href="${track.url}" target="_blank">${track.title}</a>`;
    playlistEl.appendChild(div);
  });

  const statsEl = document.getElementById("sessionStats");
  statsEl.innerHTML = `Mood: ${mood}/10 | Energy: ${energy}/10`;
}

document.getElementById("mood").addEventListener("input", e => {
  document.getElementById("moodValue").textContent = e.target.value;
});

document.getElementById("energy").addEventListener("input", e => {
  document.getElementById("energyValue").textContent = e.target.value;
});
