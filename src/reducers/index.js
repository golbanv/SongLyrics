import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Macarena", duration: "4:34" },
    { title: "Boy", duration: "8:32" },
    { title: "Lol", duration: "1:23" },
    { title: "Kek", duration: "1:55" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
