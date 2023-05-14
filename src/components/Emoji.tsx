import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating: number;
}

interface EmojiMap { [key: number]: ImageProps }

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: EmojiMap = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
        5: { src: bullsEye, alt: 'flawless', boxSize: '35px' },
    };

    return (
        <Image {...emojiMap[rating]} />
    );
};

export default Emoji;