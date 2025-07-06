function song (img , Albumname , artist1 ,artist2, artist3,folder){
    let artist = `<div class="artists">`

    if(artist1){
        artist = artist+` <a href=""  class="artist-link">${artist1}</a>, `
    }

    if(artist2){
        artist = artist+ ` <a href=""  class="artist-link">${artist2}</a>, <br>`
    }

    if(artist3){
        artist = artist+ `        <a href=""  class="artist-link">${artist3}</a></div>
`
    }

    artist = artist+ `  </div>`


    let addsong = ` <div class="box" data-folder="${folder}">
          <div class="play">
                  <img src= ${img} alt="song photo">

        <button>
          <img src="images/play.png" alt="Play Button" />
        </button>
      </div>
        <span>${Albumname}</span>
        ${artist}     
        
    </div>`

    document.querySelector(".bigbox").innerHTML = document.querySelector(".bigbox").innerHTML + addsong;
}

song("images/ab67616d00001e02114e03dcb192736b33a42cb5.jpg" , "Trending" ,"Pritam" ,"Arijit Singh" , "Sandeep Srivastava","songs/ts")
song("	https://i.scdn.co/image/ab67616d00001e026fbb60d6a7e03ccb940a518e" , "cool","","","Ed Sheeran","songs/cool")
song("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Sad" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli","songs/sad" )
song("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Emotional" ,"Pritam", "", "" , "songs/Emotional")