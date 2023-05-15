"use client";

import { Box, Center, Checkbox, HStack, Select, Text } from '@chakra-ui/react'
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import React, { useState, useCallback } from 'react'
import { FiSearch } from "react-icons/fi"
import CustomButton from '@components/general/CustomButton'
import { IoIosAdd } from "react-icons/io"
import { useTable } from '@hooks/useTable'
import { numberWithCommas } from '@utils/numberWithCommas';
import AddCategoryModal from '@components/modals/AddCategoryModal';

const Categories = () => {
    const [searchValue, setSearchValue] = useState("");
    const [openAddCategory, setOpenCategory] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const { slice, pages, count } = useTable(category_list, page, perPage);

    const updatePerPage = (count) => {
        setPerPage(count);
        setPage(1);
    };

    const handleOpenAddCategory = useCallback(() => {
        setOpenCategory(true)
    }, []);

    const handleCloseAddCategory = useCallback(() => {
        setOpenCategory(false)
    }, []);

    return (
        <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
            <Box px={14} bg={"white"} py={3}>
                <CustomButton
                    type="button"
                    text="ADD NEW CATEGORY"
                    icon={<IoIosAdd className='text-xl' />}
                    variant={"solid"}
                    width={"200px"}
                    fontSize={"12px"}
                    handleClick={handleOpenAddCategory}
                />
            </Box>
            <Box mx={14} mt={4}>
                <Box my={6} bg={"white"} py={4} px={8} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
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
                                placeholder="Type to search Categories"
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
                    headers={["select", "category name", "total categories", "total products"]}
                    footer={
                        <TablePagination
                            pages={pages}
                            setPage={setPage}
                            page={page}
                            count={count}
                        />
                    }
                >
                    {slice?.filter((category) => {
                        return (
                            category === "" ? category :
                                category.category_name.toLowerCase().includes(searchValue.toLowerCase())
                        )
                    })?.map((data, index) => {
                        return (
                            <tr key={index} className="h-20 border-b">
                                <td className="py-3 px-4 text-sm text-center">
                                    <Checkbox colorScheme='purple' />
                                </td>
                                <td className="py-3 px-4 text-sm">{data?.category_name}</td>
                                <td className="py-3 px-4 text-sm">{numberWithCommas(Number(data?.sub_category_count))}</td>
                                <td className="py-3 px-4 text-sm">{numberWithCommas(Number(data?.products_count))}</td>
                                {/* actions table */}
                                <td className="">
                                    <CustomButton type="button" variant={"solid"} text="View" width={"80px"} />
                                </td>
                            </tr>
                        )
                    })}
                </Table>
            </Box>
            <AddCategoryModal
                isOpen={openAddCategory}
                onClose={handleCloseAddCategory}
            />
        </Box>
    )
}

export default Categories

const options = [5, 10, 15, 20];

const category_list = [
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
    {
        category_name: "furniture",
        sub_category_count: "234",
        products_count: "1200"
    },
]