import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
    const { genres } = useGenres();
    return genres?.results.find((genre) => genre.id === genreId)
}

export default useGenre;