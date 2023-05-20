import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";
import useGameQueryStore from "../store";
import {useNavigate} from "react-router-dom";

const SearchInput = () => {
    const navigate = useNavigate();
    const setSearchText = useGameQueryStore(s => s.setSearchText);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (inputRef.current) {
                setSearchText(inputRef.current.value);
                navigate('/');
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={inputRef} placeholder="Search games..." borderRadius={20} variant="filled"/>
            </InputGroup>
        </form>
    );
};

export default SearchInput;