// document.addEventListener('DOMContentLoaded', function() {
//   const fullscreenPlayer = document.getElementById('fullscreenPlayer');
//   const closeBtn = document.getElementById('closeFullscreen');
  
//   // When any song box is clicked
//   document.addEventListener('click', function(e) {
//     const box = e.target.closest('.box');
//     if (box) {
//       // Get song data
//       const img = box.querySelector('img').src;
//       const title = box.querySelector('span').textContent;
//       const artist = box.querySelector('.artists').textContent;
      
//       // Update fullscreen player
//       document.getElementById('fullscreenAlbumArt').src = img;
//       document.getElementById('fullscreenSongTitle').textContent = title;
//       document.getElementById('fullscreenArtist').textContent = artist;

//       // Sample lyrics - replace with real data
//       document.getElementById('fullscreenLyrics').textContent = 
//         "You're glowing, you colour and fracture the light\n" +
//         "You can't help but shine\n" +
//         "And I know that you carry the world on your back\n" +
//         "But look at your tongue!\n\n" +
//         "The lights, your face, your eyes\n" +
//         "Exploding like fireworks in the sky\n" +
//         "(Sapphire!)";
      
//       // Show fullscreen player
//       fullscreenPlayer.classList.add('active');
//     }
//   });
  
  
//   // Close button
//   closeBtn.addEventListener('click', function() {
//     fullscreenPlayer.classList.remove('active');
//   });
// });


