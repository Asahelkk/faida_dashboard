"use client";

import React, { useState, useEffect } from 'react'
import BreadCrumb from '@components/general/BreadCrumb'
import { Box, Text } from '@chakra-ui/react'
import CustomSelect from '../CustomSelect'
import TimePeriodFilter from '../TimePeriodFilter';
import DashboardCard from '../cards/DashboardCard';
import { numberWithCommas } from '@utils/numberWithCommas';
import LayoutStrutureSelect from './LayoutStructureSelect';
import { AiFillSetting } from "react-icons/ai"
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import { useTable } from '@hooks/useTable'

const Overview = () => {

    const [page, setPage] = useState(1);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [bestSalesPersons, setBestSalesPersons] = useState([]);
    const [topStores, setTopStores] = useState([]);
    const perPage = 8;

    const { slice, pages, count } = useTable(sales_list, page, perPage);

    useEffect(() => {
        setBestSellingProducts(best_selling_products?.slice(0, 4));
        setBestSalesPersons(best_sells_people?.slice(0, 4));
        setTopStores(top_stores.slice(0, 4));
    }, []);

    const handleViewMoreProducts = () => {
        setBestSellingProducts(best_selling_products);
    };

    const handleViewLessProducts = () => {
        setBestSellingProducts(best_selling_products?.slice(0, 4));
    };

    const handleViewMorePeople = () => {
        setBestSalesPersons(best_sells_people);
    };

    const handleViewLessPeople = () => {
        setBestSalesPersons(best_sells_people?.slice(0, 4));
    };

    const handleViewMoreTopStores = () => {
        setTopStores(top_stores);
    };

    const handleViewLessTopStores = () => {
        setTopStores(top_stores.slice(0, 4));
    };

    return (
        <Box position={"relative"}>
            <Box mt={8} mb={5}>
                <BreadCrumb title={"Overview"} />
            </Box>
            <Box display={"flex"} alignItems={"end"} gap={4}>
                <CustomSelect label={"Merchants"} type={"S"} options={suppliers_options} />
                <CustomSelect label={"Products"} type={"P"} options={products_options} />
                <TimePeriodFilter />
            </Box>
            <Box display={"flex"} gap={3} mt={10}>
                <Box className='w-3/4'>
                    {/* Cards total merchant, total sales, total stock summary */}
                    <Box display={"flex"} alignItems={"center"} gap={3} width={"full"}>
                        {summary.map((value, index) => (
                            <DashboardCard
                                key={index}
                                text={value.text}
                                sub_text={value.sub_text}
                                amount={value.text === "Total Merchants" ? numberWithCommas(Number(value.amount)) : `Tsh ${numberWithCommas(Number(value.amount))}`}
                                icon={<AiFillSetting className='text-black text-2xl p-1 border rounded-full cursor-pointer' />}
                            />
                        ))}
                    </Box>

                    {/* Daily sales breakdown */}
                    <Box width={"full"} mt={10} bg={"white"} pl={4} pr={2} borderRadius={"md"}>
                        <Box display={"flex"} justifyContent={"space-between"} alignItems={"baseline"} pt={8} pb={1}>
                            <Box display={"flex"} flexDirection={"column"} gap={0.5}>
                                <Text fontSize={"xl"} fontWeight={"bold"}>Daily Sales</Text>
                                <Text fontSize={"sm"}>Daily sales breakdown</Text>
                                <Text fontSize={"sm"} textColor={"gray.400"}>18 Feb 2021 - 16 June 2021</Text>
                            </Box>
                            <Box display={"flex"} alignItems={"center"} gap={3}>
                                {/* Select */}
                                <LayoutStrutureSelect currentSelect={"table"} />
                                <Box>
                                    <AiFillSetting className='text-black text-3xl p-1 border rounded-full cursor-pointer' />
                                </Box>
                            </Box>
                        </Box>
                        <Table
                            headers={["merchant", "product", "quantity", "amount", "order no", "date"]}
                            headerColor={"bg-[#F5F8F9] rounded-full"}
                            transformation={"capitalize"}
                            footer={
                                <TablePagination
                                    pages={pages}
                                    setPage={setPage}
                                    page={page}
                                    count={count}
                                />
                            }
                        >
                            {slice?.map((data, index) => {
                                return (
                                    <tr key={index} className="border-b">
                                        <td className="py-3 px-4 text-[14px]">{data?.merchant}</td>
                                        <td className="py-3 px-4 text-[14px]">{data?.product}</td>
                                        <td className="py-3 px-4 text-[14px]">{data?.quantity}</td>
                                        <td className="py-3 px-4 text-[14px]">Tsh {numberWithCommas(Number(data?.amount))}</td>
                                        <td className="py-3 px-4 text-[14px]">{data?.order_no}</td>
                                        <td className="py-3 px-4 text-[14px]">{data?.date}</td>
                                    </tr>
                                )
                            })}
                        </Table>
                    </Box>
                </Box>
                <Box className='w-1/4' display={"flex"} flexDirection={"column"} gap={3}>
                    {/* Best selling products */}
                    <Box width={"full"} bg={"white"} pt={6} pb={3} borderRadius={"lg"}>
                        <Box display={"flex"} justifyContent={"space-between"} px={3}>
                            <Box>
                                <Text fontSize={"lg"} textColor={"black"} fontWeight={"semibold"}>Best selling products</Text>
                                <Text fontSize={"sm"} textColor={"gray.400"}>18 Feb 2021 - 16 June 2021</Text>
                            </Box>
                            <Box>
                                <AiFillSetting className='text-black text-3xl p-1 border rounded-full cursor-pointer' />
                            </Box>
                        </Box>
                        {/* Select */}
                        <Box px={3} pt={4}>
                            <LayoutStrutureSelect currentSelect={"table"} />
                        </Box>
                        <Box mt={3} borderY={"1px"} borderColor={"gray.300"} width={"full"}>
                            <Box mx={3}>
                                <table className="min-w-full mt-4">
                                    <thead>
                                        <tr className={"border-b"}>
                                            <th className={"py-2 capitalize text-start font-semibold text-sm"}>
                                                Products
                                            </th>
                                            <th className={"py-2 capitalize text-end font-semibold text-sm"}>
                                                Total sales
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-normal text-md">
                                        {bestSellingProducts?.map((data, index) => {
                                            return (
                                                <tr key={index} className="border-b">
                                                    <td className="py-3 text-start text-[14px]">{data?.product}</td>
                                                    <td className="py-3 text-end text-[14px]">Tsh {numberWithCommas(Number(data?.sales))}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                        {bestSellingProducts?.length === 4 ?
                            <Box pt={4} textAlign={"center"} >
                                <p onClick={handleViewMoreProducts} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>See full report</p>
                            </Box>
                            : bestSellingProducts?.length > 4 &&
                            <Box pt={4} textAlign={"center"}>
                                <p onClick={handleViewLessProducts} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>Minimize report</p>
                            </Box>
                        }
                    </Box>

                    {/* Top Stores */}
                    <Box width={"full"} bg={"white"} pt={6} pb={3} borderRadius={"lg"}>
                        <Box display={"flex"} justifyContent={"space-between"} px={3}>
                            <Box>
                                <Text fontSize={"lg"} textColor={"black"} fontWeight={"semibold"}>Top Stores</Text>
                                <Text fontSize={"sm"} textColor={"gray.400"}>18 Feb 2021 - 16 June 2021</Text>
                            </Box>
                            <Box cursor={"pointer"}>
                                <AiFillSetting className='text-black text-3xl p-1 border rounded-full cursor-pointer' />
                            </Box>
                        </Box>
                        {/* Select */}
                        <Box px={3} pt={4}>
                            <LayoutStrutureSelect currentSelect={"table"} />
                        </Box>
                        <Box mt={3} borderY={"1px"} borderColor={"gray.300"} width={"full"}>
                        <Box mx={3}>
                                <table className="min-w-full mt-4">
                                    <thead>
                                        <tr className={"border-b"}>
                                            <th className={"py-2 capitalize text-start font-semibold text-sm"}>
                                                Name
                                            </th>
                                            <th className={"py-2 capitalize text-end font-semibold text-sm"}>
                                                Revenue
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-normal text-md">
                                        {topStores?.map((data, index) => {
                                            return (
                                                <tr key={index} className="border-b">
                                                    <td className="py-3 text-start text-[14px]">{data?.name}</td>
                                                    <td className="py-3 text-end text-[14px]">Tsh {numberWithCommas(Number(data?.revenue))}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                        {topStores?.length === 4 ?
                            <Box pt={4} textAlign={"center"} >
                                <p onClick={handleViewMoreTopStores} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>See full report</p>
                            </Box>
                            : topStores?.length > 4 &&
                            <Box pt={4} textAlign={"center"}>
                                <p onClick={handleViewLessTopStores} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>Minimize report</p>
                            </Box>
                        }
                    </Box>


                    {/* Top Sales people */}
                    <Box width={"full"} bg={"white"} pt={6} pb={3} borderRadius={"lg"}>
                        <Box display={"flex"} justifyContent={"space-between"} px={3}>
                            <Box>
                                <Text fontSize={"lg"} textColor={"black"} fontWeight={"semibold"}>Top sales people</Text>
                                <Text fontSize={"sm"} textColor={"gray.400"}>18 Feb 2021 - 16 June 2021</Text>
                            </Box>
                            <Box cursor={"pointer"}>
                                <AiFillSetting className='text-black text-3xl p-1 border rounded-full cursor-pointer' />
                            </Box>
                        </Box>
                        {/* Select */}
                        <Box px={3} pt={4}>
                            <LayoutStrutureSelect currentSelect={"table"} />
                        </Box>
                        <Box mt={3} borderY={"1px"} borderColor={"gray.300"} width={"full"}>
                            <Box mx={3}>
                                <table className="min-w-full mt-4">
                                    <thead>
                                        <tr className={"border-b"}>
                                            <th className={"py-2 capitalize text-start font-semibold text-sm"}>
                                                Name
                                            </th>
                                            <th className={"py-2 capitalize text-end font-semibold text-sm"}>
                                                Revenue
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="font-normal text-md">
                                        {bestSalesPersons?.map((data, index) => {
                                            return (
                                                <tr key={index} className="border-b">
                                                    <td className="py-3 text-start text-[14px]">{data?.name}</td>
                                                    <td className="py-3 text-end text-[14px]">Tsh {numberWithCommas(Number(data?.revenue))}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </Box>
                        </Box>
                        {bestSalesPersons?.length === 4 ?
                            <Box pt={4} textAlign={"center"} >
                                <p onClick={handleViewMorePeople} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>See full report</p>
                            </Box>
                            : bestSalesPersons?.length > 4 &&
                            <Box pt={4} textAlign={"center"}>
                                <p onClick={handleViewLessPeople} className={"text-primary_color cursor-pointer text-sm hover:font-semibold tracking-wide"}>Minimize report</p>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default Overview

const suppliers_options = ["Supplier X", "Supplier Y", "Supplier Z"]

const products_options = ["Rice", "Sugar", "Flour"]

const best_selling_products = [
    {
        product: "Azam milk",
        sales: "67833000"
    },
    {
        product: "Rice",
        sales: "330500"
    },
    {
        product: "Beans",
        sales: "1238000"
    },
    {
        product: "Mo Energy",
        sales: "67833000"
    },
    {
        product: "Azam milk",
        sales: "67833000"
    },
    {
        product: "Rice",
        sales: "330500"
    },
    {
        product: "Beans",
        sales: "1238000"
    },
    {
        product: "Mo Energy",
        sales: "67833000"
    },
    {
        product: "Azam milk",
        sales: "67833000"
    },
    {
        product: "Rice",
        sales: "330500"
    },
    {
        product: "Beans",
        sales: "1238000"
    },
    {
        product: "Mo Energy",
        sales: "67833000"
    },
]

const top_stores = [
    {
        name: "Mark Paul",
        revenue: 67833000
    },
    {
        name: "Cluadian Benet",
        revenue: 330500
    },
    {
        name: "Mercy Allen",
        revenue: 1238000
    },
    {
        name: "Samuel Ricks",
        revenue: 67833000
    },
    {
        name: "Mark Paul",
        revenue: 67833000
    },
    {
        name: "Cluadian Benet",
        revenue: 330500
    },
    {
        name: "Mercy Allen",
        revenue: 1238000
    },
    {
        name: "Samuel Ricks",
        revenue: 67833000
    },
    {
        name: "Mark Paul",
        revenue: 67833000
    },
    {
        name: "Cluadian Benet",
        revenue: 330500
    },
    {
        name: "Mercy Allen",
        revenue: 1238000
    },
    {
        name: "Samuel Ricks",
        revenue: 67833000
    },
]

const best_sells_people = [
    {
        name: "Mark Paul",
        revenue: "67833000"
    },
    {
        name: "Cluadian Benet",
        revenue: "330500"
    },
    {
        name: "Mercy Allen",
        revenue: "1238000"
    },
    {
        name: "Samuel Ricks",
        revenue: "67833000"
    },
    {
        name: "Mark Paul",
        revenue: "67833000"
    },
    {
        name: "Cluadian Benet",
        revenue: "330500"
    },
    {
        name: "Mercy Allen",
        revenue: "1238000"
    },
    {
        name: "Samuel Ricks",
        revenue: "67833000"
    },
    {
        name: "Mark Paul",
        revenue: "67833000"
    },
    {
        name: "Cluadian Benet",
        revenue: "330500"
    },
    {
        name: "Mercy Allen",
        revenue: "1238000"
    },
    {
        name: "Samuel Ricks",
        revenue: "67833000"
    },
]

const summary = [
    {
        text: "Total sales",
        sub_text: "Last 30 days",
        amount: "329009374",
    },
    {
        text: "Total Merchants",
        sub_text: "Last 30 days",
        amount: "3200",
    },
    {
        text: "Total Stock",
        sub_text: "Last 30 days",
        amount: "9009000",
    },

]

const sales_list = [
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
    {
        merchant: "Eoshi",
        product: "Zincal",
        quantity: "123",
        unit: "Pcs",
        amount: "200000",
        order_no: "ALNU23FWE9",
        date: "22-09-21"
    },
]