import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platformId: number) => void;
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
    const { platforms, error } = usePlatforms();
    const selectedPlatformName = platforms?.results.find((platform) => platform.id === selectedPlatformId)?.name;

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />} >
                {selectedPlatformName || 'Platforms'}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatform(platform.id)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;