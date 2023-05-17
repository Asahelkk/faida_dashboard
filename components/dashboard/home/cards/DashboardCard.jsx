"use client";

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const DashboardCard = ({text, sub_text, amount, icon}) => {
    return (
        <Box py={5} px={3} bg={"white"} display={"flex"} flexDirection={"column"} gap={2} width={"full"} borderRadius={"lg"}>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Text fontSize={"md"} textColor={"black"} letterSpacing={1}>{text}</Text>
                    <Text fontSize={"xs"} textColor={"gray.400"} mt={0.5} letterSpacing={1}>{sub_text}</Text>
                </Box>
                <Box cursor={"pointer"}>
                    {icon}
                </Box>
            </Box>


            <Text className='text-primary_color uppercase' fontSize={"xl"} fontWeight={"bold"} letterSpacing={1}>{amount}</Text>
        </Box>
    )
}

export default DashboardCard