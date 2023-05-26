"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, FormLabel, Text, Select, useToast } from '@chakra-ui/react';
import { toastProps } from '@utils/toastHelper';
import { useState, useEffect } from 'react';
import LoadingButton from '@components/general/LoadingButton';


const UpdateSubCategoryModal = ({ isOpen, onClose, current }) => {

    const toast = useToast();

    const [isSubmitting, setSubmitting] = useState(false);
    const [state, setState] = useState({
        sub_category_name: "",
        category: "",
    });

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            sub_category_name: current.sub_category_name,
            category: current.category
        }))
    }, [current]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleValidation = () => {
        if (state.sub_category_name === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, and a sub category",
                status: "error",
            });

            return false;
        }
        else if (state.category === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, select a category",
                status: "error",
            });

            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = handleValidation();

        // Verify validation before submitting
        if (!isValid) return;

        setSubmitting(true);

        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(state))
                resolve();
                setSubmitting(false);
                onClose();
            }, 2000)
        })
    }

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            width={"w-7/12"}
        >
            <Box py={16} px={20} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Update SubCategory</Text>
                    {isSubmitting ? <LoadingButton width={"120px"} height={"40px"} /> : <CustomButton handleClick={handleSubmit} type="button" fontSize={"14px"} text={"Edit"} variant={"outline"} width={"80px"} height={"40px"} />}
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
                                name="sub_category_name"
                                value={state.sub_category_name}
                                onChange={handleChange}
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
                            h={12}
                            gap="xs"
                            bg="white"
                            name="category"
                            onChange={handleChange}
                        >
                            <option value={state.category}>{state.category}</option>
                        </Select>
                    </FormControl>
                </Box>

            </Box>

        </CustomModal>
    )
}

export default UpdateSubCategoryModal