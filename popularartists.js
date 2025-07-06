function artist (img , name){
    let addartist = ` <div class="box">
      <div class="play">
              <img src= ${img} alt="artist photo">

        <button>
          <img src="images/play.png" alt="Play Button" />
        </button>
      </div>
        <span>${name}</span>
        <a href=""  class="artist-link">Artist</a>
        
    </div>`

    document.querySelector(".popartist").innerHTML = document.querySelector(".popartist").innerHTML + addartist;
}

artist("https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca" , "Pritam");
artist("https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c" , "A.R. Rahman");
artist("https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7" , "Arijit Singh");
artist("https://i.scdn.co/image/ab67616100005174bb4064bef3a825344d5eb79e" , "Sachin-Jigar");
artist("https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca" , "Pritam");
artist("https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c" , "A.R. Rahman");
artist("https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7" , "Arijit Singh");
artist("https://i.scdn.co/image/ab67616100005174bb4064bef3a825344d5eb79e" , "Sachin-Jigar");
artist("https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca" , "Pritam");
artist("https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c" , "A.R. Rahman");
artist("https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7" , "Arijit Singh");
artist("https://i.scdn.co/image/ab67616100005174bb4064bef3a825344d5eb79e" , "Sachin-Jigar");
artist("https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca" , "Pritam");
artist("https://i.scdn.co/image/ab67616100005174b19af0ea736c6228d6eb539c" , "A.R. Rahman");
artist("https://i.scdn.co/image/ab676161000051745ba2d75eb08a2d672f9b69b7" , "Arijit Singh");
artist("https://i.scdn.co/image/ab67616100005174bb4064bef3a825344d5eb79e" , "Sachin-Jigar");
