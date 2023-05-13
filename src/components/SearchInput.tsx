import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";

interface Props {
    onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current) onSearch(inputRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} placeholder="Search games..." borderRadius={20} variant="filled"/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;