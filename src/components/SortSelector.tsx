import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Popularity
            </MenuButton>
            <MenuList>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Rating</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SortSelector;