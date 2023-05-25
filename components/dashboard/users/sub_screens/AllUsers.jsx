"use client"

import { Box, Center, Checkbox, HStack, Select, Text } from '@chakra-ui/react'
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import React, { useState, useCallback } from 'react'
import { FiSearch } from "react-icons/fi"
import Link from 'next/link'
import CustomButton from '@components/general/CustomButton'
import { useTable } from '@hooks/useTable'
import UpdateUserModal from '@components/modals/UpdateUserModal'

const AllUsers = () => {

    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [current, setCurrent] = useState({});
    const [openUpdateUser, setOpenUpdateUser] = useState(false);

    const { slice, pages, count } = useTable(user_list, page, perPage);

    const updatePerPage = (count) => {
        setPerPage(count);
        setPage(1);
    };

    const handleOpenUpdateUser = useCallback(() => {
        setOpenUpdateUser(true);
    }, []);

    const handleCloseUpdateUser = useCallback(() => {
        setOpenUpdateUser(false);
    }, []);

    return (
        <Box>
            <Box my={3} bg={"white"} py={4} px={8} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <HStack spacing={5}>
                    <Text fontWeight="normal" fontSize={"sm"} line-height="short">
                        Show Entries
                    </Text>
                    <Select
                        border={1.0}
                        borderStyle="solid"
                        borderColor="gray.300"
                        focusBorderColor="gray.300"
                        borderRadius={"none"}
                        color="black"
                        width={28}
                        h={9}
                        gap="xs"
                        bg="white"
                        onChange={(e) => updatePerPage(parseInt(e.target.value))}
                    >
                        {options.map((pageOption, index) => (
                            <option key={index} value={pageOption}>
                                {pageOption}
                            </option>
                        ))}
                    </Select>
                </HStack>
                <Box
                    w={"230px"}
                    overflow={"hidden"}
                >
                    <Box display={"flex"} alignItems={"center"} gap={3}>
                        <input
                            placeholder="Type to search User"
                            className="border-0 outline-none focus:outline-none h-8 w-28 flex-grow"
                            type="text"
                            onChange={(e) => setSearchValue(e.target.value)}

                        />
                        <Center
                            h={"5"}
                            w={"5"}
                            textColor={"gray.500"}
                            fontSize={"lg"}
                        >
                            <FiSearch />
                        </Center>
                    </Box>
                </Box>
            </Box>
            <Table
                headers={["select", "name", "phone", "status", "action"]}
                paddingX={"px-8"}
                footer={
                    <TablePagination
                        pages={pages}
                        setPage={setPage}
                        page={page}
                        count={count}
                    />
                }
            >
                {slice?.filter((user) => {
                    return (
                        user === "" ? user :
                            user.firstname.toLowerCase().includes(searchValue.toLowerCase()) ||
                            user.lastname.toLowerCase().includes(searchValue.toLowerCase())
                    )
                })?.map((data, index) => {
                    const status = STATUS_LIST[data?.isActive];
                    const textaColor =
                        data?.isActive
                            ? "text-primary_green"
                            : "text-primary_red";
                    const bg =
                        data?.isActive
                            ? "bg-gray-300"
                            : "bg-primary_red";
                    return (
                        <tr key={index} className="h-20 border-b">
                            <td className="py-3 px-4 text-sm text-center">
                                <Checkbox colorScheme='purple' />
                            </td>
                            <td className="py-3 px-4 text-sm">{`${data?.firstname} ${data?.lastname}`}</td>
                            <td className="py-3 px-4 text-sm">{data?.phone}</td>
                            <td className="py-3 px-4 text-sm">
                                <div className='flex items-center gap-4'>
                                    <div className={`h-3 w-3 rounded-full ${bg}`} />
                                    <div className={`text-center ${textaColor}`}>
                                        {status}
                                    </div>
                                </div>
                            </td>
                            {/* actions table */}
                            <td className="">
                                <CustomButton
                                    handleClick={() => {
                                        setCurrent(data)
                                        handleOpenUpdateUser()
                                    }}
                                    type="button"
                                    variant={"solid"}
                                    text="View"
                                    width={"80px"}
                                />
                            </td>
                        </tr>
                    )
                })}
            </Table>
            <UpdateUserModal
                isOpen={openUpdateUser}
                onClose={handleCloseUpdateUser}
                current={current}
            />
        </Box>
    )
}

export default AllUsers

const options = [5, 10, 15, 20]

const user_list = [
    {
        _id: 1,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: false,
    },
    {
        _id: 2,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: true,
    },
    {
        _id: 3,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: false,
    },
    {
        _id: 4,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: true,
    },
    {
        _id: 5,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: false,
    },
    {
        _id: 6,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: true,
    },
    {
        _id: 7,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: false,
    },
    {
        _id: 8,
        firstname: "John",
        lastname: "Doe",
        phone: "+255742353791",
        isActive: true,
    },
]

const STATUS_LIST = {
    true: "Active",
    false: "Deactivated",
}