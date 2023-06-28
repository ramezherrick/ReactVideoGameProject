import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import useGenericHook from "../hooks/GenericHook";

const GenreList = () => {
  //   const { genres } = useGenres();
  const { data } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.name}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
