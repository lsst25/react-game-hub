import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

const Layout = () => {
    return (
        <>
            <Box paddingX={5}>
                <NavBar/>
                <Outlet/>
            </Box>
        </>
    );
};

export default Layout;