import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current) setSearchText(inputRef.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} placeholder="Search games..." borderRadius={20} variant="filled"/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;