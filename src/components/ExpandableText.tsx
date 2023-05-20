import {useState} from "react";
import {Box, Button, Text} from "@chakra-ui/react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({children, maxChars = 300}: Props) => {
    const [expanded, setExpanded] = useState(false);

    if (!children) return null;

    if (children.length <= maxChars) {
        return (
            <Text>{children}</Text>
        );
    }

    const text = expanded ? children : `${children.slice(0, maxChars)}...`;

    return (
        <Box>
            <Text>{text}</Text>
            <Button fontWeight="bold" colorScheme="yellow" size="xs" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show less" : "Show more"}
            </Button>
        </Box>
    );
};

export default ExpandableText;