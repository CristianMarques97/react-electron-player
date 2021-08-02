import axios from "axios";
import React from "react";
import "./App.css";
import PlaylistView from "./app/components/playlist/PlaylistView";
import MusicEnvironment from "./app/variables/MusicEnvironment";

function App() {
  const [playlist, setPlaylist] = React.useState("");

  const fetchMusics = async () => {
    const { data: playlist } = await axios.get(
      `${MusicEnvironment.MusicRepositoryUrl}playlist.json`
    );
    setPlaylist(playlist);
  };
  React.useEffect(() => {
    fetchMusics();
  }, []);

  return (
    <div className="App">
      <PlaylistView playlist={playlist} />
    </div>
  );
}

export default App;
