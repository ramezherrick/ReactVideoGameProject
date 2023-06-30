import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import useGenericHook from "../hooks/GenericHook";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  //   const { genres } = useGenres();
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem paddingY="5px" key={g.name}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            ></Image>
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
