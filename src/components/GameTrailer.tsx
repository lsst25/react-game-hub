import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const { data, isLoading, error } = useTrailers(gameId);

    if (isLoading) return null;
    if (error || !data) throw error;

    const trailer = data.results[0];

    return trailer ? (
        <video
            src={trailer.data['480']}
            poster={trailer.preview}
            controls />
    ) : null;
};

export default GameTrailer;