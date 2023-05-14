import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading as="h2">Genres</Heading>
            <List>
                {genres.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                src={getCroppedImgUrl(genre.image_background)}
                                alt={genre.name}
                                boxSize="32px"
                                borderRadius={8}/>
                            <Button
                                variant="link"
                                fontSize="lg"
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={isSelected(selectedGenre, genre) ? "bold" : "normal"}
                                colorScheme={isSelected(selectedGenre, genre) ? "blue" : ""}
                                onClick={() => onSelectGenre(genre)}>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

function isSelected(selectedGenre: Genre | null, genre: Genre) {
    return  selectedGenre?.id === genre.id;
}

export default GenreList;