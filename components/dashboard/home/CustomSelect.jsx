import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const CustomSelect = ({ value, label }) => {
    return (
        <Box display={"flex"} flexDirection={"column"} gap={2}>
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
                <IoMdArrowDropdown className={"text-gray-400 text-xl"} />
            </Box>
        </Box>

    )
}

export default CustomSelect