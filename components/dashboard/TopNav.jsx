"use client";

import Image from "next/image";
import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { BsBell } from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai"

const TopNav = ({ toggleSideBar }) => {
    return (
        <HStack h={"60px"} bg={"white"} justifyContent={"space-between"} className="shadow-md">
            <button
                className={"text-primary_color_light hover:text-primary_color ml-8"}
                onClick={toggleSideBar}
            >
                <HiBars3 className="text-3xl" />
            </button>

            {/* nav items */}
            <HStack px={"3"} gap={"2"}>
                <button
                    className={
                        "hover:bg-zinc-100 p-2 rounded-full focus:outline-none relative"
                    }
                >
                    <BsBell className="text-2xl" />

                    <Badge />
                </button>

                <HStack gap={"4"}>
                    <Box display={"flex"} alignItems={"center"} gap={3} py={1}>
                        <Image src="/assets/images/Faida_App_Logo-003.png" alt="Profile" width={45} height={45} className="rounded-full" />
                        <Box display={"flex"} flexDirection={"column"} gap={1}>
                            <Text textColor={"black"}>Hi, <Text as="span" className="text-primary_color font-semibold">Asahel</Text></Text>
                            <Text textColor={"gray.500"} fontSize={"sm"}>adminuser@gmail.com</Text>
                        </Box>
                    </Box>

                    <button
                        className={"text-black"}
                    >
                        <AiFillCaretDown className="text-sm" />
                    </button>
                </HStack>
            </HStack>
        </HStack>
    )
}

export default TopNav;

const Badge = () => (
    <Box
        bg={"#F44D70"}
        borderRadius={"full"}
        position={"absolute"}
        top={"1"}
        right={"2"}
        h={"4"}
        w={"4"}
        textColor={"white"}
        fontSize={"xx-small"}
        borderWidth={"2px"}
        borderColor={"white"}
    >2</Box>
);
