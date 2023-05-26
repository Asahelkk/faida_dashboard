"use client";

import { Box, Center, Checkbox, HStack, Select, Text } from '@chakra-ui/react'
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import React, { useState, useCallback } from 'react'
import { FiSearch } from "react-icons/fi"
import CustomButton from '@components/general/CustomButton'
import { IoIosAdd } from "react-icons/io"
import { useTable } from '@hooks/useTable'
import Image from 'next/image';
import AddProductModal from '@components/modals/AddProductModal';
import UpdateProductModal from '@components/modals/UpdateProductModal';

const Products = () => {
    const [searchValue, setSearchValue] = useState("");
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [openUpdateProduct, setOpenUpdateProduct] = useState(false);
    const [current, setCurrent] = useState({});
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const { slice, pages, count } = useTable(product_list, page, perPage);

    const updatePerPage = (count) => {
        setPerPage(count);
        setPage(1);
    };

    const handleOpenAddProduct = useCallback(() => {
        setOpenAddProduct(true)
    }, []);

    const handleCloseAddProduct = useCallback(() => {
        setOpenAddProduct(false)
    }, []);

    const handleOpenUpdateProduct = useCallback(() => {
        setOpenUpdateProduct(true)
    }, []);

    const handleCloseUpdateProduct = useCallback(() => {
        setOpenUpdateProduct(false)
    }, []);

    return (
        <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
            <Box px={14} bg={"white"} py={3}>
                <CustomButton
                    type="button"
                    text="ADD NEW PRODUCT"
                    icon={<IoIosAdd className='text-xl' />}
                    variant={"solid"}
                    width={"200px"}
                    fontSize={"12px"}
                    handleClick={handleOpenAddProduct}
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
                                placeholder="Type to search Products"
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
                    headers={["select", "product name", "category", "subcategory"]}
                    footer={
                        <TablePagination
                            pages={pages}
                            setPage={setPage}
                            page={page}
                            count={count}
                        />
                    }
                >
                    {slice?.filter((product) => {
                        return (
                            product === "" ? product :
                                product.product_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                product.category.toLowerCase().includes(searchValue.toLowerCase()) ||
                                product.sub_category.toLowerCase().includes(searchValue.toLowerCase())
                        )
                    })?.map((data, index) => {
                        return (
                            <tr key={index} className="h-20 border-b">
                                <td className="py-3 px-4 text-sm text-center">
                                    <Checkbox colorScheme='purple' />
                                </td>
                                <td className="py-3 px-4 text-sm">
                                    <div className='flex items-center gap-6'>
                                        <Image
                                            src={data?.image_url}
                                            alt="Product"
                                            width={45} height={45} className="rounded-full h-auto w-auto"
                                        />
                                        <p>{data?.product_name}</p>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-sm">{data?.category}</td>
                                <td className="py-3 px-4 text-sm">{data?.sub_category}</td>
                                {/* actions table */}
                                <td className="">
                                    <CustomButton
                                        handleClick={() => {
                                            setCurrent(data);
                                            handleOpenUpdateProduct();
                                        }}
                                        type="button"
                                        variant={"solid"}
                                        text="Edit"
                                        width={"80px"}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </Table>
            </Box>
            <AddProductModal
                isOpen={openAddProduct}
                onClose={handleCloseAddProduct}
            />

            <UpdateProductModal
                isOpen={openUpdateProduct}
                onClose={handleCloseUpdateProduct}
                current={current}
            />
        </Box>
    )
}

export default Products

const options = [5, 10, 15, 20];

const product_list = [
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
    {
        image_url: "/assets/images/Faida_App_Logo-003.png",
        product_name: "MRM mabati",
        category: "furniture",
        sub_category: "fittings",
    },
]