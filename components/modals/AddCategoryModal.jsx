"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, HStack, Text } from '@chakra-ui/react';


const AddCategoryModal = ({ isOpen, onClose }) => {
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            width={"w-7/12"}
        >
            <Box py={16} px={24} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Add Category</Text>
                    <CustomButton type="button" fontSize={"14px"} text={"Save"} variant={"solid"} width={"80px"} height={"40px"} />
                </Box>
                <Box my={14}>
                    <FormControl>
                        <Box
                            p={2}
                            w={"full"}
                            borderWidth={"1px"}
                            borderColor={"gray.400"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                        >
                            <input
                                placeholder="Type Category"
                                className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                type="text"
                            />
                        </Box>
                    </FormControl>
                    <HStack spacing={3} my={4}>
                        <CustomButton type="button" fontSize={"14px"} text={"Deactivate"} variant={"danger"} width={"120px"} height={"40px"} />
                        <CustomButton type="button" fontSize={"14px"} text={"Activate"} variant={"solid"} width={"120px"} height={"40px"} />
                    </HStack>
                </Box>

            </Box>
        </CustomModal>
    )
}

export default AddCategoryModal