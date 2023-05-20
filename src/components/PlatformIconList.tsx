import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux ,MdPhoneIphone, SiNintendo, BsGlobe } from "react-icons/all";
import Platform from "../interfaces/platform";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        linux: FaLinux,
    };

    return (
        <>
            <HStack marginY={1}>
                {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />)}
            </HStack>
        </>
    );
};

export default PlatformIconList;