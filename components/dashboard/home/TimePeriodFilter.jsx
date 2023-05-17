"use client";

import { Box, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const TimePeriodFilter = () => {
    const [currentFilter, setCurrentFilter] = useState("30 days");

    return (
        <Box display={"flex"} alignItems={"center"} gap={4}>
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
                    handleClick={() => setCurrentFilter("custom")}
                    ml={0.5}
                />
            </Box>
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
