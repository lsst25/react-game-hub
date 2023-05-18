import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { platforms } = usePlatforms();
    return platforms?.results.find((platform) => platform.id === id)
};

export default usePlatform;