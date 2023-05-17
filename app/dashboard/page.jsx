"use client";

import { Box, HStack } from '@chakra-ui/react'
import Overview from '@components/dashboard/home/sub_screens/Overview';
import SubNavItem from '@components/general/SubNavItem';
import React, { useState } from 'react'

const Dashboard = () => {
  const [currentSubNav, setCurrentSubNav] = useState("overview");
  return (
    <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
      <Box width={"full"} bg={"#FCFCFC"}>
        <HStack px={8} spacing={0}>
          <SubNavItem
            height={"14"}
            isCurrent={currentSubNav.toLowerCase() === "overview"}
            handleClick={() => setCurrentSubNav("overview")}
            title={"Overview"}
            fontSize={"text-sm"}
            textAlign={"center"}
          />
          <SubNavItem
            height={"14"}
            isCurrent={currentSubNav.toLowerCase() === "daily stats"}
            handleClick={() => setCurrentSubNav("daily stats")}
            title={"Daily stats"}
            fontSize={"text-sm"}
            textAlign={"center"}
          />
        </HStack>
      </Box>

      <Box ml={8} mr={4}>
        {currentSubNav === "overview"
          && <Overview />
        }
      </Box>
    </Box>
  )
}

export default Dashboard