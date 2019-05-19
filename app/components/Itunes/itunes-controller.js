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
      <div class="card mt-2 mb-2 ml-2" style="width: 20rem;">
                        <img class="card-img-top" src="${song.albumArt}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${song.title}</h5>
                            <p class="card-text">${song.artist}</p>
                            <p class="card-text">${'$' + song.price}</p>
                            <p class="card-text">${song.collection}</p>
                           


                        </div>
                         <audio controls>
                                <source src="${song.preview}" type="audio/mpeg">

                            </audio>
                       

                    </div> 
                         
                
            `
  })
  document.querySelector('.songs-dropzone').innerHTML = template


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