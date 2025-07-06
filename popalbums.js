function album (img , title , artist1 ,artist2, artist3, folder){
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


    let addalbum = ` <div class="box" data-folder="${folder} >
      <div class="play">
              <img src= ${img} alt="song photo">

        <button>
          <img src="images/play.png" alt="Play Button" />
        </button>
      </div>
        <span>${title}</span>
        ${artist}     
        
    </div>`

    document.querySelector(".popalbums").innerHTML = document.querySelector(".popalbums").innerHTML + addalbum;
}

album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli", "songs/new")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")
// album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")
// album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")
// album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")
// album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")
// album("https://i.scdn.co/image/ab67616d00001e026404721c1943d5069f0805f3" , "Aashiqui 2" ,"Mithoon","Ankit Tiwari" , "Jeet Gannguli")
// album("https://i.scdn.co/image/ab67616d00001e02707ea5b8023ac77d31756ed4" ,"Yeh Jawaani Hai Deewani" ,"Pritam")