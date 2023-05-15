import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ShopCard = ({ text, amount }) => {
    return (
        <Box py={6} px={10} bg={"white"} display={"flex"} flexDirection={"column"} gap={2} width={"320px"} borderRadius={"lg"}>
            <Text fontSize={"lg"} textColor={"black"} letterSpacing={1}>{text}</Text>
            <Text className='text-primary_color' fontSize={"28px"} fontWeight={"bold"} letterSpacing={1}>{amount}</Text>
        </Box>
    )
}

export default ShopCard