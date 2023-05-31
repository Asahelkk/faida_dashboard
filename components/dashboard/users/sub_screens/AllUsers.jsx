"use client"

import { Box, Center, Checkbox, HStack, Select, Text } from '@chakra-ui/react'
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import React, { useState, useCallback } from 'react'
import { FiSearch } from "react-icons/fi"
import CustomButton from '@components/general/CustomButton'
import { useTable } from '@hooks/useTable'
import UpdateUserModal from '@components/modals/UpdateUserModal'
import { useUsers } from '@hooks/useUsers'

const AllUsers = () => {

    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [current, setCurrent] = useState({});
    const [openUpdateUser, setOpenUpdateUser] = useState(false);

    const users = useUsers();

    const { slice, pages, count } = useTable(users, page, perPage);

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
                            user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                            user.lastName.toLowerCase().includes(searchValue.toLowerCase())
                    )
                })?.map((data, index) => {
                    const status = STATUS_LIST[data?.accountStatus];
                    const textaColor =
                        data?.accountStatus
                            ? "text-primary_green"
                            : "text-primary_red";
                    const bg =
                        data?.accountStatus
                            ? "bg-gray-300"
                            : "bg-primary_red";
                    return (
                        <tr key={index} className="h-20 border-b">
                            <td className="py-3 px-4 text-sm text-center">
                                <Checkbox colorScheme='purple' />
                            </td>
                            <td className="py-3 px-4 text-sm">{`${data?.firstName} ${data?.lastName}`}</td>
                            <td className="py-3 px-4 text-sm">{data?.phoneNumber}</td>
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


const STATUS_LIST = {
    true: "Active",
    false: "Deactivated",
}