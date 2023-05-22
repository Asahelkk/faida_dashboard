"use client";

import Map from '@components/general/Map'
import { Box, Center, Text, VStack } from '@chakra-ui/react'
import { GrSearch } from "react-icons/gr"
import { useState } from 'react'

const ShopMapView = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <Box position={"relative"}>
            <Map lat={-1.291917} lng={36.822278} />
            <Box mt={20} ml={10}>
                <VStack spacing={12} width={"350px"}>
                    <Box width={"full"} p={6} bg={"white"} borderRadius={"lg"}>
                        <Text fontSize={"lg"} textColor={"black"}>Total registered shop</Text>
                        <Text fontSize={"xs"} textColor={"gray.300"} my={3}>All time</Text>
                        <Box display={"flex"} flexDirection={"column"} gap={1}>
                            <Text fontSize={"2xl"} fontWeight={"bold"} className='text-primary_color'>782</Text>
                            <Text fontSize={"md"} textColor={"black"}>28 registered today</Text>
                        </Box>
                    </Box>
                    <Box width={"full"} maxHeight={"79%"} py={14} px={6} bg={"white"} borderRadius={"lg"}>
                        <Text fontSize={"lg"} textColor={"black"}>Search Shops</Text>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={3}
                            my={3}
                            px={2}
                            py={0.5}
                            width={"full"}
                            borderWidth={"1.9px"}
                            borderColor={"#8E7CFB"}
                            bg={"#F8F1FF"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                        >
                            <Center
                                h={"5"}
                                w={"5"}
                                textColor={"gray.500"}
                                fontSize={"lg"}
                            >
                                <GrSearch />
                            </Center>
                            <input
                                placeholder="Search"
                                className="border-0 outline-none focus:outline-none h-8 w-28 bg-transparent flex-grow"
                                type="text"
                                onChange={(e) => setSearchValue(e.target.value)}

                            />
                        </Box>

                        <Box overflowY={"scroll"} maxHeight={"380px"}>
                            <Box pt={4} pb={2} borderBottom={"1px"} borderBottomColor={"gray.300"}>
                                <Text textColor={"gray.300"}>All</Text>
                            </Box>
                            {
                                shops?.filter((shop) => {
                                    return (
                                        shop === "" ? shop :
                                            shop.name.toLowerCase().includes(searchValue.toLowerCase())
                                    )
                                })?.map((shop, index) => {
                                    return (
                                        <Box py={5} borderBottom={"1px"} borderBottomColor={"gray.300"} key={index}>
                                            <Text pl={2} textColor={"black"}>{shop.name}</Text>
                                        </Box>
                                    )
                                })

                            }
                        </Box>
                    </Box>
                </VStack>
            </Box>
        </Box>
    )

}

export default ShopMapView

const shops = [
    { name: "Claudian Hardware" },
    { name: "Zamani Hardware" },
    { name: "Makaranga Hardware" },
    { name: "Benert Hardware" },
    { name: "Centric Hardware" },
    { name: "Claudian Hardware" },
    { name: "Zamani Hardware" },
    { name: "Makaranga Hardware" },
    { name: "Benert Hardware" },
    { name: "Centric Hardware" },
    { name: "Claudian Hardware" },
    { name: "Zamani Hardware" },
    { name: "Makaranga Hardware" },
    { name: "Benert Hardware" },
    { name: "Centric Hardware" },
    { name: "Claudian Hardware" },
    { name: "Zamani Hardware" },
    { name: "Makaranga Hardware" },
    { name: "Benert Hardware" },
    { name: "Centric Hardware" },
]