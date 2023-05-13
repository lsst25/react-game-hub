import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={getCroppedImgUrl(genre.image_background)}
                            alt={genre.name} boxSize="32px"
                            borderRadius={8} />
                        <Button
                            variant="link"
                            fontSize="lg"
                            onClick={() => onSelectGenre(genre)} >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
}

export default GenreList;