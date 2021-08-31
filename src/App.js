import "./App.css";
import InputField from "./App/Input";
import Artist from "./App/Artist";
import { useEffect, useState } from "react";
import axios from "axios";
import Track from "./App/Track";
import { AUTH_TOKEN, urlArtist } from "./App/constant";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

function App() {
  const [artist, setArtist] = useState();
  const [q, setq] = useState();
  const [topTrack, setTopTrack] = useState(null);
  useEffect(() => {
    axios({
      method: "get",
      url: urlArtist,
      params: {
        q: q,
        type: "artist",
      },
    })
      .then((ok) => {
        setArtist(ok.data.artists.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [q]);
  const hangdleId = (e) => {
    axios({
      method: "get",
      url: `https://api.spotify.com/v1/artists/${e}/top-tracks`,
      params: {
        market: "us",
      },
    })
      .then((ok) => {
        setTopTrack(ok.data.tracks);
      })
      .catch((error) => {
        console.log(`https://api.spotify.com/v1/artists/${e}/top-tracks`);
      });
  };
  console.log(topTrack);
  const changeQ = (e) => {
    setq(e);
  };
  return (
    <div className="container">
      <InputField changeQ={changeQ} />
      <Artist
        artist={Array.isArray(artist) ? artist : null}
        hangdleId={hangdleId}
      />
      {topTrack !== null ? <Track tracks={topTrack} /> : ""}
    </div>
  );
}

export default App;
