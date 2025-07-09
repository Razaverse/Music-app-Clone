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
song("images/cool.jpg" , "cool","","","Ed Sheeran","songs/cool")
song("images/sad.jpg" , "Sad" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli","songs/sad" )
song("images/Emotional.jpg" ,"Emotional" ,"Pritam", "", "" , "songs/Emotional")
song("images/love.jpg" ,"Love" ,"Pritam", "", "" , "songs/Love")

