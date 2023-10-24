import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getListSong } from "../../services/requetsToEndpoint";
import Track from "../../models/track.inteface";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardSongProps from "./cardSongProps.interface";

const CardSong = ({ searchTerm }: CardSongProps) => {
  const navigate = useNavigate();
  const [songData, setSongData] = useState<Track[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListSong(searchTerm);
      setSongData(data);
    };
    fetchData();
  }, [searchTerm]);

  const CardSongSearch = () => {
    return (
      <>
        <div style={{ marginTop: "20px" }}>
          {songData.length > 0 &&
            songData.map((track, index) => (
              <div key={index}>
                <Card
                  sx={{ maxWidth: 345 }}
                  onClick={() => {
                    navigate(`/SongPageDetails/${track.id}`);
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300"
                    src={track.imageSong}
                    alt={track.nameSong}
                  />
                  <CardContent>
                    <Typography variant="h5" color="black">
                      {track.nameArtist}
                    </Typography>
                    <Typography variant="h6" color="black">
                      {track.nameSong}
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

  return <CardSongSearch />;
};

export default CardSong;
