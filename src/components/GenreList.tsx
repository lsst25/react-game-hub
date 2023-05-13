import useGenres from "../hooks/useGenres";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

const GenreList = () => {
    const { genres } = useGenres();
    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={getCroppedImgUrl(genre.image_background)}
                            alt={genre.name} boxSize="32px"
                            borderRadius={8} />
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;