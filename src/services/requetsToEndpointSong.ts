import Song from "../models/song.interface";

const getSong = async ({ data }: any): Promise<{ [key: string]: Song }> => {
  const songSearch: { [key: string]: Song } = {};
  if (data) {
    try {
      //We use data.name as key in the object and Convert to integer duration
      songSearch[data.name] = {
        album: data.album.name,
        imageUrl: data.album.images[1].url,
        name: data.name,
        artist: data.artists[0].name,
        duration: parseInt(data.duration_ms),
        songUrl: data.external_urls.spotify
      };
    } catch (error) {
      console.log(error);
    }
  } else {
    return songSearch;
  }
  return songSearch;
};
export { getSong };
