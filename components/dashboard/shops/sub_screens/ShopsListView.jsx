"use client"

import { Box, Center, HStack, Select, Text } from '@chakra-ui/react'
import Table from '@components/general/table/Table'
import TablePagination from '@components/general/table/TablePagination'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"
import Link from 'next/link'
import CustomButton from '@components/general/CustomButton'
import { useTable } from '@hooks/useTable'
import { numberWithCommas } from '@utils/numberWithCommas'

const ShopsListView = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const { slice, pages, count } = useTable(shop_list, page, perPage);

  const updatePerPage = (count) => {
    setPerPage(count);
    setPage(1);
  };

  return (
    <Box px={14} mt={12}>
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
        headers={["shop name", "owner", "phone number", "total sales", "last activity", "action"]}
        footer={
          <TablePagination
            pages={pages}
            setPage={setPage}
            page={page}
            count={count}
          />
        }
      >
        {slice?.filter((shop) => {
          return (
            shop === "" ? shop :
              shop.shop_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              shop.owner.toLowerCase().includes(searchValue.toLowerCase()) ||
              shop.phone_number.toLowerCase().includes(searchValue.toLowerCase())
          )
        })?.map((data, index) => {
          return (
            <tr key={index} className="h-20 border-b">
              <td className="py-3 px-4 text-sm">{data?.shop_name}</td>
              <td className="py-3 px-4 text-sm">{data?.owner}</td>
              <td className="py-3 px-4 text-sm">{data?.phone_number}</td>
              <td className="py-3 px-4 text-sm">{numberWithCommas(Number(data?.total_sale))} Tsh</td>
              <td className="py-3 px-4 text-sm">{data?.last_activity}</td>
              {/* actions table */}
              <td className="">
                <Link href={`/dashboard/shops/${data?._id}`} className="flex justify-end">
                  <CustomButton type="button" variant={"solid"} text="View" width={"80px"} />
                </Link>
              </td>
            </tr>
          )
        })}
      </Table>
    </Box>
  )
}

export default ShopsListView

const options = [5, 10, 15, 20]

const shop_list = [
  {
    _id: 1,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 2,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 3,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 1,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 3,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 5,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  },
  {
    _id: 6,
    shop_name: "Makarange Hardware",
    owner: "Almas James",
    phone_number: "+255 721 543 525",
    total_sale: "4442400",
    last_activity: "12 June 2021"
  }
]