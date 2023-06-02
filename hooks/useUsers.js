"use client";

import { useToast } from '@chakra-ui/react';
import UserServices from '@utils/services/UserServices';
import { useEffect, useState } from 'react';
import { toastProps } from '@utils/toastHelper';

export const useUsers = () => {

    const toast = useToast();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            await UserServices.fetchAllUsers().then((response) => {
                setUsers(response);
            }).catch((error) => {
                toast({
                  ...toastProps,
                  title: "Error!",
                  description: error?.response?.data?.message,
                  status: "error",
                });
              })
        }
        fetchAllUsers();
    }, [toast]);

    return users; 
}
