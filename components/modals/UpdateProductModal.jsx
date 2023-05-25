"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, FormLabel, HStack, Select, Text } from '@chakra-ui/react';
import { useState } from 'react';

const AddProductModal = ({ isOpen, onClose, current }) => {

    const [image, setImage] = useState("");

    console.log(image)
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            width={"w-3/4"}
            top={"top-8"}
        >
            <Box py={8} px={16} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"normal"}>Product Information</Text>
                    <HStack spacing={4}>
                        <CustomButton type="button" fontSize={"14px"} text={"Edit"} variant={"outline"} width={"80px"} height={"40px"} />
                        <CustomButton type="button" fontSize={"14px"} text={"Save"} variant={"solid"} width={"80px"} height={"40px"} />
                    </HStack>
                </Box>
                <Box mt={10}>
                    <FormControl my={4}>
                        <FormLabel className='text-gray-500'>Product name</FormLabel>
                        <Box
                            p={2}
                            w={"full"}
                            borderWidth={"1px"}
                            borderColor={"gray.400"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                        >
                            <input
                                placeholder="Enter product name"
                                className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                type="text"
                            />
                        </Box>
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel className='text-gray-500'>Picture</FormLabel>
                        <Box
                            cursor={"pointer"}
                            p={2}
                            w={"full"}
                            borderWidth={"1px"}
                            borderStyle={"dashed"}
                            borderColor={"gray.400"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                            bg={"gray.100"}
                        >
                            <Text textColor={"gray.400"} py={1}>Browser picture from your Computer</Text>
                            <input
                                className="border-0 outline-none focus:outline-none h-8 flex-grow hidden"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) => setImage(e.target.files)}
                            />
                        </Box>
                    </FormControl>
                    <HStack spacing={4}>
                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>Primary Units</FormLabel>
                            <Box
                                p={2}
                                w={"full"}
                                borderWidth={"1px"}
                                borderColor={"gray.400"}
                                borderRadius={"md"}
                                overflow={"hidden"}
                            >
                                <input
                                    placeholder="type here"
                                    className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                    type="text"
                                />
                            </Box>
                        </FormControl>

                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>Secondary Units</FormLabel>
                            <Box
                                p={2}
                                w={"full"}
                                borderWidth={"1px"}
                                borderColor={"gray.400"}
                                overflow={"hidden"}
                                borderRadius={"md"}
                            >
                                <input
                                    placeholder="type here"
                                    className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                    type="text"
                                />
                            </Box>
                        </FormControl>
                    </HStack>
                    <HStack spacing={4}>
                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>Select Category</FormLabel>
                            <Select
                                border={1.0}
                                borderStyle="solid"
                                borderColor="gray.400"
                                focusBorderColor="#8E7CFB"
                                color="gray.400"
                                width={"full"}
                                h={12}
                                gap="xs"
                                bg="white"
                            >
                                <option>Select category</option>
                            </Select>
                        </FormControl>

                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>Subcategory</FormLabel>
                            <Select
                                border={1.0}
                                borderStyle="solid"
                                borderColor="gray.400"
                                focusBorderColor="#8E7CFB"
                                color="gray.400"
                                width={"full"}
                                h={12}
                                gap="xs"
                                bg="white"
                            >
                                <option>Select Subcategory</option>
                            </Select>
                        </FormControl>
                    </HStack>
                </Box>

            </Box>
        </CustomModal>
    )
}

export default AddProductModal