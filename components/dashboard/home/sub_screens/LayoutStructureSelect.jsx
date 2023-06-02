"use client";

import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md"
import { RiBarChart2Line } from "react-icons/ri"
import { RxTable } from "react-icons/rx"

const LayoutStrutureSelect = ({ currentSelect }) => {

    const [current, setCurrent] = useState("table");
    const [showSelect, setShowSelect] = useState(false);

    const handleShowSelect = () => {
        setShowSelect((prev) => !prev);
    }

    const selectedStyling = "flex items-center gap-2";

    useEffect(() => {
        setCurrent(currentSelect)
    }, [currentSelect]);

    return (
        <Box position={"relative"} width={32}>
            <Box
                cursor={"pointer"}
                border={1}
                borderStyle="solid"
                borderColor="gray.400"
                borderRadius={"md"}
                color="gray.400"
                width={32}
                h={7}
                bg="white"
                px={1}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
            >
                <Box>
                    <Box className={current === "table" ? `${selectedStyling} block` : `${selectedStyling} hidden`}>
                        <span><RxTable className='text-gray-800 text-xl pl-1' /></span>
                        <span className='text-gray-500'>Table</span>
                    </Box>
                    <Box className={current === "chart" ? `${selectedStyling} block` : `${selectedStyling} hidden`}>
                        <span><RiBarChart2Line className='text-gray-800 text-xl pl-1' /></span>
                        <span className='text-gray-500'>Chart</span>
                    </Box>
                </Box>
                <Box onClick={handleShowSelect}>
                    <MdKeyboardArrowDown className='text-gray-400 text-2xl' />
                </Box>
            </Box>
            {showSelect &&
                <Box bg={"gray.50"} width={32} className="absolute">
                    <Box
                        className={"flex items-center gap-2 hover:bg-gray-100 py-1 cursor-pointer"}
                        onClick={() => {
                            setCurrent("table")
                            setShowSelect(false)
                        }}
                    >
                        <span><RxTable className='text-gray-800 text-xl pl-1' /></span>
                        <span className='text-gray-500'>Table</span>
                    </Box>
                    <Box
                        className={"flex items-center gap-2 hover:bg-gray-100 py-1 cursor-pointer"}
                        onClick={() => {
                            setCurrent("chart")
                            setShowSelect(false)
                        }}
                    >
                        <span><RiBarChart2Line className='text-gray-800 text-xl pl-1' /></span>
                        <span className='text-gray-500'>Chart</span>
                    </Box>
                </Box>
            }
        </Box>
    )

}

export default LayoutStrutureSelect;
