import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)
  console.log('test draw ')
  $('col').append("<div class = songsSelected> this song</div> ");

}


//PUBLIC
class ItunesController {
  constructor() {
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