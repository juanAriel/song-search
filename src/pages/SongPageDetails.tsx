import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Song from "../models/song.interface";
import { getSong } from "../services/requetsToEndpointSong";
import CardSongDetails from "../components/molecules/cardSongDetails";
import { useGetSearchTrackQuery } from "../services/api";

const SongDataDetails = () => {
  const { index } = useParams();
  const  {data}  =  useGetSearchTrackQuery(index);
  const [song, setSong] = useState<Song[]>([]);
  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const dataSong = await getSong(data);
        setSong(dataSong);
      } catch (error) {
        console.log(error);
      }
    };
    if (data) {
      fetchSongData();
    }
  }, [data]);
  return (
    <div>
      <CardSongDetails songs={song} />
    </div>
  );
};

export default SongDataDetails;