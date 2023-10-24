import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useParams } from "react-router-dom";
import { getToken } from "../services/generateToken";
import SearchTrack from "../services/requestSearchTrack";
import { Link } from "react-router-dom";

function ConvertTime(durationInMilliseconds: number) {
  const totalSeconds = Math.floor(durationInMilliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


const SongDataDetails = () => {
  const { index } = useParams();
  const [song, setSong] = useState<any>(undefined);

  useEffect(() => {
    const dataSong = async () => {
      if (index) {
        const token = await getToken();
        const result = await SearchTrack(index, token);
        setSong(result);
      }
    };
    dataSong();
  }, [index]);

  return (
    <Card sx={{ display: "flex", margin: "auto", maxWidth: 550, background: '#db6a3d9c' }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", alignContent: 'center', alignItems: 'center', padding: '30px' }}>
          <Typography component="div" variant="h5" sx={{ fontWeight: 'bold' }}>
            ALBUM: {song && song.album.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            Artista:{song && song.artists[0].name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            Titulo:{song && song.name}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{ fontWeight: 'bold' }}
          >
            Duracion:{song && ConvertTime(song.duration_ms)}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", margin: 'auto' }}>
          <Link to={song && song.external_urls.spotify}>
            <IconButton sx={{ borderRadius: '25px', height: '50px', marginBottom: '20px' }}>
              <p>Escuchar</p>
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        src={song && song.album.images[1].url}
      />
    </Card>
  );
};

export default SongDataDetails;
