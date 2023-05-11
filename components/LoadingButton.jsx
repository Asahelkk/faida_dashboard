import { Button } from "@chakra-ui/react";
import React from "react";

const LoadingButton = ({ ...rest }) => {
    return (
        <Button
            isLoading
            loadingText="Loading"
            cursor={"pointer"}
            borderRadius={"md"}
            bg={"#8E7CFB"}
            className={"text-white text-xl"}
            w={"full"}
            spinnerPlacement="end"
            {...rest}
        >
            Continue
        </Button>
    );
};

export default LoadingButton;