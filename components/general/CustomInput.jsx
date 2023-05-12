"use client";

import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const CustomInput = ({
    placeholder = "",
    type = "text",
    value,
    handleChange,
    label,
    name,
    icon,
    text,
    width,
    handleEyeClick,
    ...rest
}) => {
    return (
        <Box
            pl={3}
            py={0.5}
            w={width}
            borderWidth={"1px"}
            borderLeftWidth={"4px"}
            borderLeftColor={"#8E7CFB"}
            overflow={"hidden"}
            {...rest}
        >
            <label className="text-sm text-gray-600">{label}</label>
            <Box display={"flex"} alignItems={"center"} gap={3}>
                {icon}
                <span className="text-secondary_color font-semibold">{text}</span>
                <input
                    placeholder={placeholder}
                    className="border-0 outline-none focus:outline-none h-8 flex-grow"
                    type={type}
                    value={value}
                    onChange={handleChange}
                    name={name}
                />
                {name === "otp" && (
                    <Center
                        className="cursor-pointer"
                        w={"10"}
                        h={"full"}
                        onClick={() => {
                            if (type === "password") {
                                handleEyeClick("text");
                            } else {
                                handleEyeClick("password");
                            }
                        }}
                    >
                        {type === "password" ? (
                            <AiFillEye className="text-2xl text-primary_color" />
                        ) : (
                            <AiFillEyeInvisible className="text-2xl text-primary_color" />
                        )}
                    </Center>
                )}
            </Box>
        </Box>
    )
}

export default CustomInput