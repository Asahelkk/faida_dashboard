"use client";

import { Box, Center, HStack, Text } from '@chakra-ui/react'
import Calendar from '@components/general/Calendar';
import React, { useState } from 'react'
import { addMonths, subMonths } from 'date-fns'
import CustomButton from '@components/general/CustomButton';
import { HiOutlineArrowSmRight } from 'react-icons/hi'

const TimePeriodFilter = () => {
    const [currentFilter, setCurrentFilter] = useState("30 days");
    const [calendarFilter, setCalenderFilter] = useState("today");
    const [viewCalendar, setViewCalendar] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handleViewCalendar = () => {
        setViewCalendar((prev) => !prev)
    }

    return (
        <Box display={"flex"} alignItems={"center"} gap={4} position={"relative"}>
            <Text>Time Period</Text>
            <Box display={"flex"} alignItems={"center"}>
                <DaysFilterButton
                    value="Today"
                    isCurrent={currentFilter.toLowerCase() === "today"}
                    handleClick={() => setCurrentFilter("today")}
                />
                <DaysFilterButton
                    value="7 days"
                    isCurrent={currentFilter.toLowerCase() === "7 days"}
                    handleClick={() => setCurrentFilter("7 days")}
                />
                <DaysFilterButton
                    value="30 days"
                    isCurrent={currentFilter.toLowerCase() === "30 days"}
                    handleClick={() => setCurrentFilter("30 days")}
                />
                <DaysFilterButton
                    value="60 days"
                    isCurrent={currentFilter.toLowerCase() === "60 days"}
                    handleClick={() => setCurrentFilter("60 days")}
                />
                <DaysFilterButton
                    value="custom"
                    isCurrent={currentFilter.toLowerCase() === "custom"}
                    handleClick={() => {
                        setCurrentFilter("custom")
                        handleViewCalendar()
                    }}
                    ml={0.5}
                />
            </Box>
            {viewCalendar &&
                <Box position={"absolute"} top={10} left={-96} bg={"white"} borderRadius={"lg"} className='shadow-xl'>
                    <HStack>
                        <Box width={"150px"} mr={2}>
                            {filterDays.map((data, index) => (
                                <CalendarDaysFilter
                                    key={index}
                                    value={data.name}
                                    isCurrent={calendarFilter.toLowerCase() === data.name}
                                    handleClick={() => setCalenderFilter(data.name)}
                                />
                            ))}
                        </Box>
                        <Box>
                            <HStack borderBottom={'1px'} borderBottomColor={"gray.200"} spacing={0}>
                                <Calendar
                                    currentMonth={currentMonth}
                                    prevMonth={prevMonth}
                                    nextMonth={nextMonth}
                                    borderRight={true}
                                />
                                <Calendar
                                    currentMonth={currentMonth}
                                    prevMonth={prevMonth}
                                    nextMonth={nextMonth}
                                    borderRadiusRight={true}
                                />
                            </HStack>
                            <Box display={"flex"} justifyContent={"space-between"} px={6} py={4}>
                                <HStack>
                                    <Box border={"1px"} borderRadius={"md"} p={0.5}>
                                        <input
                                            className="border-0 outline-none focus:outline-none h-7 w-24 flex-grow"
                                            type="date"
                                        />
                                    </Box>
                                    <Center>
                                        <HiOutlineArrowSmRight className='text-black text-lg' />
                                    </Center>
                                    <Box border={"1px"} borderRadius={"md"} p={0.5}>
                                        <input
                                            className="border-0 outline-none focus:outline-none h-7 w-24 flex-grow"
                                            type="date"
                                        />
                                    </Box>
                                </HStack>
                                <HStack>
                                    <CustomButton type="button" fontSize={"12px"} text={"Cancel"} variant={"outline"} width={"80px"} height={"35px"} />
                                    <CustomButton type="button" fontSize={"12px"} text={"Save date"} variant={"solid"} width={"80px"} height={"35px"} />
                                </HStack>
                            </Box>
                        </Box>
                    </HStack>
                </Box>
            }
        </Box>
    )
}

export default TimePeriodFilter;

const DaysFilterButton = ({
    value,
    isCurrent,
    handleClick,
    ...rest
}) => (
    <Box
        className={isCurrent ? "bg-primary_color text-white" : "text-black bg-white"}
        py={1}
        px={4}
        onClick={handleClick}
        cursor={"pointer"}
        {...rest}
    >
        {value}
    </Box>
)

const CalendarDaysFilter = ({
    value,
    isCurrent,
    handleClick,
    ...rest
}) => (
    <Box
        className={isCurrent ? "bg-gray-200 text-[#EB8D51]" : "text-black bg-white"}
        py={1}
        pl={4}
        fontSize={"sm"}
        onClick={handleClick}
        textTransform={"capitalize"}
        cursor={"pointer"}
        {...rest}
    >
        {value}
    </Box>
);

const filterDays = [
    {
        name: "today",
        value: new Date()
    },
    {
        name: "yesterday",
        value: new Date()
    },
    {
        name: "last 7 days",
        value: new Date()
    },
    {
        name: "last 14 days",
        value: new Date()
    },
    {
        name: "last 30 days",
        value: new Date()
    },
    {
        name: "last 12 months",
        value: new Date()
    },
    {
        name: "month to date",
        value: new Date()
    },
    {
        name: "quarter to date",
        value: new Date()
    },
    {
        name: "all time",
        value: new Date()
    },
    {
        name: "custom",
        value: new Date()
    },
]

