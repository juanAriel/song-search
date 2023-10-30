import Song from "../models/song.interface";

const getSong = async (data: any): Promise<Song[]> =>  {
  const songSearch: Song[] = [];
  //we create a variable and to asigned the value of the getToken fuction
    if (data) {
      try {
          songSearch.push({
            album:data.album.name,
            imageUrl: data.album.images[1].url,
            name:data.name,
            artist: data.artists[0].name,
            duration: data.duration_ms,
            songUrl: data.external_urls.spotify
          });
        
      } catch (error) {
        console.log(error);
      }
    }
    else {
      return songSearch;
    }
  return songSearch;
};
export { getSong };
