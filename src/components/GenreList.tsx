import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li key={g.name}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
