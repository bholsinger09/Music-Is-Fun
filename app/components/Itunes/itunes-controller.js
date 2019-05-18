import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  console.log('test draw ')
  //$('col').append("<div class = songsSelected> this song</div> ");
  let songs = itunesService.Songs
  let template = ''
  songs.forEach(song => {

    template +=

      `
      <div class= "container songs-container">
                <div class="row mx-auto   ">  
                    <div class="col-6  ">
                     <ul id = "song-title">${song.title}</ul>
                    <ul id = "song-artist" >${song.artist}</ul>
                    <ul id = "song-collection">${song.collection}</ul>
                    
                   
                      <img class="img-responsive" src= "${song.albumArt}" />
                      <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
      
                    </audio>
                    
                    </div>

                     <div class="col-6 " >
                    <ul id = "song-title">${song.title}</ul>
                    <ul id = "song-artist" >${song.artist}</ul>
                    <ul id = "song-collection">${song.collection}</ul>
                    
                   
                      <img class="img-responsive" src= "${song.albumArt}" />
                      <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
      
                    </audio>
                   
                    </div>

                    </div>
                    </div>
           
               
                 
                   
                  
               
                    
                
                
            `
  })
  document.querySelector('main').innerHTML = template


}


//PUBLIC
class ItunesController {
  constructor() {
    drawSongs()
    itunesService.addSubscriber('songs', drawSongs)
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController