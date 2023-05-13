import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props {
    selectedSort: string;
    onSelectSort: (sort: string) => void;
}

const SortSelector = ({ selectedSort, onSelectSort }: Props) => {
    const sortOptions = [
        { name: 'Relevance', value: '' },
        { name: 'Date added', value: '-added' },
        { name: 'Name', value: 'name' },
        { name: 'Release Date', value: '-released' },
        { name: 'Popularity', value: '-metacritic' },
        { name: 'Average Rating', value: '-rating' },
    ];

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
                        onClick={() => onSelectSort(option.value)}>
                        {option.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;