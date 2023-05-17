import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

interface Props {
    selectedGenreId?: number;
    onSelectGenre: (genre: number) => void;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
    const { genres, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading as="h2">Genres</Heading>
            <List>
                {genres?.results.map((genre) => (
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
                                fontWeight={isSelected(selectedGenreId, genre) ? "bold" : "normal"}
                                colorScheme={isSelected(selectedGenreId, genre) ? "blue" : ""}
                                onClick={() => onSelectGenre(genre.id)}>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

function isSelected(selectedGenreId: number | undefined, genre: Genre) {
    return  selectedGenreId === genre.id;
}

export default GenreList;