"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, FormLabel, HStack, Text, Select } from '@chakra-ui/react';


const AddSubCategoryModal = ({ isOpen, onClose }) => {
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            width={"w-7/12"}
        >
            <Box py={16} px={20} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Add SubCategory</Text>
                    <CustomButton type="button" fontSize={"14px"} text={"Save User"} variant={"solid"} width={"120px"} height={"40px"} />
                </Box>
                <Box mt={10}>
                    <FormControl my={4}>
                        <FormLabel className='text-gray-500'>Subcategory</FormLabel>
                        <Box
                            p={2}
                            w={"full"}
                            borderWidth={"1px"}
                            borderColor={"gray.400"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                        >
                            <input
                                placeholder="Type here"
                                className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                type="text"
                            />
                        </Box>
                    </FormControl>
                    <FormControl my={4}>
                        <FormLabel className='text-gray-500'>Select Category</FormLabel>
                        <Select
                            border={1.0}
                            borderStyle="solid"
                            borderColor="gray.300"
                            focusBorderColor="#8E7CFB"
                            color="gray.300"
                            width={"full"}
                            h={9}
                            gap="xs"
                            bg="white"
                        >
                            <option>Select Category</option>
                        </Select>
                    </FormControl>

                    <HStack spacing={3} my={10}>
                        <CustomButton type="button" fontSize={"14px"} text={"Deactivate"} variant={"danger"} width={"120px"} height={"40px"} />
                        <CustomButton type="button" fontSize={"14px"} text={"Activate"} variant={"solid"} width={"120px"} height={"40px"} />
                    </HStack>
                </Box>

            </Box>

        </CustomModal>
    )
}

export default AddSubCategoryModal