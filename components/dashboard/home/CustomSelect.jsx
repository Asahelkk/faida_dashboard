"use client";

import { Box, Center, Checkbox, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'

const CustomSelect = ({ value, label, type, options }) => {
    const [showSelect, setShowSelect] = useState(false);

    const handleShowSelect = () => {
        setShowSelect((prev) => !prev);
    }
    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} position={"relative"}>
            <Text>{label}</Text>
            <Box
                cursor={"pointer"}
                bg={"white"}
                borderRadius={"lg"}
                pl={4}
                pr={3}
                py={2}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"200px"}
            >
                <Text fontWeight={"semibold"} textColor={"gray.600"}>{value ? value : "All"}</Text>
                <Box onClick={handleShowSelect}>
                    <IoMdArrowDropdown className={"text-gray-400 text-xl"} />
                </Box>
            </Box>
            {showSelect &&
                <Box width={"200px"} position={"absolute"} bg={"white"} top={20}>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={1.5}
                        px={2.5}
                        py={1.5}
                        width={"full"}
                        borderBottomWidth={"1px"}
                        overflow={"hidden"}
                    >
                        <Text fontWeight={"light"} fontSize={"sm"}>{type}</Text>
                        <input
                            className="border-0 outline-none focus:outline-none h-8 w-28 flex-grow"
                            type="text"
                        />
                        <Center
                            h={"5"}
                            w={"5"}
                            fontSize={"xl"}
                            textColor={"#8E7CFB"}
                        >
                            <AiOutlineSearch />
                        </Center>
                    </Box>
                    {options.map((option, index) => {
                        <Box
                            key={index}
                            pl={2}
                            py={1}
                            borderBottomWidth={"1px"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={2}
                            cursor={"pointer"}
                            onClick={() => setShowSelect(false)}
                        >
                            <Checkbox colorScheme='purple' />
                            <Text>{option}</Text>
                        </Box>
                    })}
                </Box>
            }
        </Box>

    )
}

export default CustomSelect
