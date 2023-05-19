import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <NavBar/>
            <Box margin={5}>
                <Heading>Error</Heading>
                <Text>
                    {isRouteErrorResponse(error) ? 'Page not found' : 'Something went wrong'}
                </Text>
            </Box>
        </div>
    )
};

export default ErrorPage;