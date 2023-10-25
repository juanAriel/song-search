
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Track from "../../../models/track.inteface";

const CardSongSearch = ({ songData, goSong }: { songData: Track[], goSong: any }) => {
    const values = songData;
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          {values.length > 0 &&
            values.map((track, index) => (
              <div key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => {
                    goSong(track.id);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    src={track.imageUrl}
                    alt={track.name}
                  />
                  <CardContent>
                    <Typography variant="h5" color="black">
                      {track.artist}
                    </Typography>
                    <Typography variant="h6" color="black">
                      {track.name}
                    </Typography>
                  </CardContent>
                </Card>
                <br />
              </div>
            ))}
        </div>
      </>
    );
  };

  export default CardSongSearch;

