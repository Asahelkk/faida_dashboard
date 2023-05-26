"use client";

import CustomButton from '@components/general/CustomButton'
import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, Text, useToast } from '@chakra-ui/react';
import { toastProps } from '@utils/toastHelper';
import { useState, useEffect } from 'react';
import LoadingButton from '@components/general/LoadingButton';

const UpdateCategoryModal = ({ isOpen, onClose, current }) => {

    const toast = useToast();

    const [isSubmitting, setSubmitting] = useState(false);
    const [category, setCategory] = useState("");

    useEffect(() => {
        setCategory(current)
    }, [current]);

    const handleValidation = () => {
        if (category === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, add a category",
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
                alert(JSON.stringify({ category }))
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
            <Box py={16} px={24} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Update Category</Text>
                    {isSubmitting ? <LoadingButton width={"120px"} height={"40px"} /> : <CustomButton handleClick={handleSubmit} type="button" fontSize={"14px"} text={"Edit"} variant={"outline"} width={"80px"} height={"40px"} />}
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
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Box>
                    </FormControl>
                </Box>

            </Box>
        </CustomModal>
    )
}

export default UpdateCategoryModal