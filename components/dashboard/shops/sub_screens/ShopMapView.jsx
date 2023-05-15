import React, { useState } from 'react'
import Map from '@components/general/Map'
import { Box, Center, Text, VStack } from '@chakra-ui/react'
import { GrSearch } from "react-icons/gr"

const ShopMapView = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div>
            <Map lat={-1.291917} lng={36.822278}>
                <Box className='absolute top-8 left-6'>
                    <VStack spacing={5} width={"50px"}>
                        <Box width={"full"} p={4} bg={"white"}>
                            <Text fontSize={"sm"} textColor={"black"}>Total registered shop</Text>
                            <Text fontSize={"xs"} textColor={"gray.300"} my={4}>All time</Text>
                            <Box display={"flex"} flexDirection={"column"} gap={3}>
                                <Text fontSize={"xl"} className='text-primary_color'>782</Text>
                                <Text fontSize={"xs"} textColor={"black"} my={4}>28 registered today</Text>
                            </Box>
                        </Box>
                        <Box width={"full"} maxHeight={"79%"} py={8} pl={6} pr={3} bg={"white"}>
                            <Text textColor={"black"}>Search Shops</Text>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={3}
                                my={3}
                                px={2}
                                py={0.5}
                                width={"full"}
                                borderWidth={"2px"}
                                borderColor={"#8E7CFB"}
                                overflow={"hidden"}>
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
                                    className="border-0 outline-none focus:outline-none h-8 w-28 flex-grow"
                                    type="text"
                                    onChange={(e) => setSearchValue(e.target.value)}

                                />
                            </Box>

                            <Box overflowY={"scroll"}>
                                <Box pt={4} pb={2} borderBottom={"1px"} borderBottomColor={"gray.300"}>
                                    <Text textColor={"gray.300"}>All</Text>
                                </Box>
                                {
                                    shops.filter((shop) => {
                                        return (
                                            shop === "" ? shop :
                                                shop.name.toLowerCase().includes(searchValue.toLowerCase())
                                        )
                                    }).map((shop, index) => {
                                        <Box py={4} borderBottom={"1px"} borderBottomColor={"gray.300"} key={index}>
                                            <Text textColor={"gray.300"}>{shop.name}</Text>
                                        </Box>
                                    })

                                }
                            </Box>
                        </Box>
                    </VStack>
                </Box>
            </Map>
        </div>
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