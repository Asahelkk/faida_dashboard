"use client";

import CustomModal from '@components/general/CustomModal'
import { Box, FormControl, FormLabel, HStack, Text, useToast } from '@chakra-ui/react';
import CustomButton from '@components/general/CustomButton';
import { useState } from "react"
import { toastProps } from '@utils/toastHelper';
import LoadingButton from '@components/general/LoadingButton';
import UserServices from '@utils/services/UserServices';

const AddUserModal = ({ isOpen, onClose }) => {

    const toast = useToast();

    const [isSubmitting, setSubmitting] = useState(false);
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        accountStatus: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleAcountActivationStatus = () => {
        setState((prev) => ({
            ...prev,
            accountStatus: true
        }));
    }

    const handleAcountDeActivationStatus = () => {
        setState((prev) => ({
            ...prev,
            accountStatus: false
        }));
    }


    const handleValidation = () => {
        if (state.firstName === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, user first name is required",
                status: "error",
            });

            return false;
        }
        else if (state.lastName === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, user last name is required",
                status: "error",
            });

            return false;
        }
        else if (state.phoneNumber === "") {
            toast({
                ...toastProps,
                title: "Error!",
                description: "Please, user phone number is required",
                status: "error",
            });

            return false;
        }

        return true;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = handleValidation();

        // Verify validation before submitting
        if (!isValid) return;

        setSubmitting(true);

        const data = {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            accountStatus: state.accountStatus.toString()
        }

        await UserServices.createUser(data).then((response) => {
            toast({
                ...toastProps,
                title: "Success",
                description: response,
                status: "success",
            });
            setSubmitting(false);
            onClose();
            window.location.reload();
        }).catch((error) => {
            toast({
                ...toastProps,
                title: "Error!",
                description: error,
                status: "error",
            });
            setSubmitting(false);
        })
    }

    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            width={"w-2/3"}
        >
            <Box py={16} px={20} width={"full"}>
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={4}>
                    <Text fontSize={"2xl"} fontWeight={"semibold"}>Add User</Text>
                    <HStack spacing={4}>
                        {isSubmitting ? <LoadingButton width={"120px"} height={"40px"} /> : <CustomButton handleClick={handleSubmit} type="button" fontSize={"14px"} text={"Save User"} variant={"solid"} width={"120px"} height={"40px"} />}
                    </HStack>
                </Box>
                <Box mt={10}>
                    <HStack spacing={4}>
                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>First name</FormLabel>
                            <Box
                                p={2}
                                w={"320px"}
                                borderWidth={"1px"}
                                borderColor={"gray.400"}
                                borderRadius={"md"}
                                overflow={"hidden"}
                            >
                                <input
                                    placeholder="type here"
                                    className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange}
                                />
                            </Box>
                        </FormControl>

                        <FormControl my={4}>
                            <FormLabel className='text-gray-500'>Last name</FormLabel>
                            <Box
                                p={2}
                                w={"320px"}
                                borderWidth={"1px"}
                                borderColor={"gray.400"}
                                overflow={"hidden"}
                                borderRadius={"md"}
                            >
                                <input
                                    placeholder="type here"
                                    className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                />
                            </Box>
                        </FormControl>
                    </HStack>
                    <FormControl my={4}>
                        <FormLabel className='text-gray-500'>Phone number</FormLabel>
                        <Box
                            p={2}
                            w={"320px"}
                            borderWidth={"1px"}
                            borderColor={"gray.400"}
                            overflow={"hidden"}
                            borderRadius={"md"}
                        >
                            <input
                                placeholder="+255 742 423 435"
                                className="border-0 outline-none focus:outline-none h-8 flex-grow"
                                type="text"
                                name="phoneNumber"
                                onChange={handleChange}
                            />
                        </Box>
                    </FormControl>

                    <HStack spacing={3} my={4}>
                        <CustomButton handleClick={handleAcountDeActivationStatus} type="button" fontSize={"14px"} text={"Deactivate"} variant={"danger"} width={"120px"} height={"40px"} />
                        <CustomButton handleClick={handleAcountActivationStatus} type="button" fontSize={"14px"} text={"Activate"} variant={"solid"} width={"120px"} height={"40px"} />
                    </HStack>
                </Box>

            </Box>

        </CustomModal>
    )
}

export default AddUserModal