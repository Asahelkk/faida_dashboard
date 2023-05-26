"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, FormLabel, HStack, Select, Text, useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import LoadingButton from '@components/general/LoadingButton';
import { toastProps } from '@utils/toastHelper';

const UpdateProductModal = ({ isOpen, onClose, current }) => {

    const toast = useToast();
    
    const [image, setImage] = useState("");
    const [isSubmitting, setSubmitting] = useState(false);
    const [state, setState] = useState({
        product_name: "",
        image_url: "",
        primary_units: "",
        secondary_units: "",
        category: "",
        sub_category: ""
    });

    console.log(image)

    useEffect(() => {
        setState((prev) => ({
            ...prev,
            product_name: current.product_name,
            image_url: current.image_url,
            primary_units: "",
            secondary_units: "",
            category: current.category,
            sub_category: current.sub_category
        }))
    }, [current]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleValidation = () => {
        if (state.product_name === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, product name is required",
                status: "error",
            });

            return false;
        }
        else if (image === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, product picture is required",
                status: "error",
            });

            return false;
        }
        else if (state.primary_units === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, primary units is required",
                status: "error",
            });

            return false;
        }
        else if (state.secondary_units === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, secondary units is required",
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
        else if (state.sub_category === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, select a sub category",
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

        const formData = new FormData();
        formData.append('productName', state.product_name);
        formData.append('image', image);
        formData.append('primaryUnits', state.primary_units);
        formData.append('secondaryUnits', state.secondary_units);
        formData.append('category', state.category);
        formData.append('subCategory', state.sub_category);

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
            width={"w-3/4"}
            top={"top-8"}
        >
            <Box py={8} px={16} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"normal"}>Product Information</Text>
                    <HStack spacing={4}>
                        {isSubmitting ? <LoadingButton width={"120px"} height={"40px"} /> : <CustomButton handleClick={handleSubmit} type="button" fontSize={"14px"} text={"Edit"} variant={"outline"} width={"80px"} height={"40px"} />}
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
                                name="product_name"
                                value={state.product_name}
                                onChange={handleChange}
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
                                    name="primary_units"
                                    value={state.primary_units}
                                    onChange={handleChange}
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
                                    name="secondary_units"
                                    value={state.secondary_units}
                                    onChange={handleChange}
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
                                name="category"
                                onChange={handleChange}
                            >
                                <option value={state.category}>{state.category}</option>
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
                                name="sub_category"
                                onChange={handleChange}
                            >
                                <option value={state.sub_category}>{state.sub_category}</option>
                            </Select>
                        </FormControl>
                    </HStack>
                </Box>

            </Box>
        </CustomModal>
    )
}

export default UpdateProductModal