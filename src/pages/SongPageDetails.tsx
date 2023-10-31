import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Song from "../models/song.interface";
import { getSong } from "../services/requetsToEndpointSong";
import CardSongDetails from "../components/molecules/cardSongDetails";
import { useGetSearchTrackQuery } from "../services/api";

const SongDataDetails = () => {
  const { index } = useParams();
  const dataSong = useGetSearchTrackQuery(index);
  const [song, setSong] = useState<{ [key: string]: Song }>({});
  useEffect(() => {
    const fetchSongData = async () => {
      try {
        const dataSongDetail = await getSong(dataSong);
        setSong(dataSongDetail);
      } catch (error) {
        console.log(error);
      }
    };
    if (dataSong) {
      fetchSongData();
    }
  }, [dataSong]);
  return (
    <div>
      <CardSongDetails songDetail={Object.values(song)} />
    </div>
  );
};

export default SongDataDetails;