import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import useGameQueryStore from "../store";

const SortSelector = () => {
    const sortOptions = [
        { name: 'Relevance', value: '' },
        { name: 'Date added', value: '-added' },
        { name: 'Name', value: 'name' },
        { name: 'Release Date', value: '-released' },
        { name: 'Popularity', value: '-metacritic' },
        { name: 'Average Rating', value: '-rating' },
    ];
    const selectedSort = useGameQueryStore(s => s.gameQuery.sort);
    const setSort = useGameQueryStore(s => s.setSort);
    const selectedSortName = sortOptions.find((option) => option.value === selectedSort)?.name;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {selectedSort ? selectedSortName : 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOptions.map((option) => (
                    <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => setSort(option.value)}>
                        {option.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;