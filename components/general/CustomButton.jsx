"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ text, handleClick, variant, type, width, ...rest }) => {
    return (
        <Box
            as='button'
            type={type}
            width={width}
            height='50px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            px='10px'
            fontSize='16px'
            fontWeight='semibold'
            _active={{
                transform: 'scale(0.98)',
            }}
            onClick={handleClick}
            {...rest}
            className={`rounded-md  ${variant === "solid" ?
                `bg-primary_color text-white hover:bg-primary_color` :
                variant === "outline" &&
                `bg-white text-primary_color border-2 border-primary_color hover:text-primary_color hover:border-primary_color`}`}
        >
            <Box className='flex justify-center'>
                {text}
            </Box>
        </Box>


    )
}

export default CustomButton