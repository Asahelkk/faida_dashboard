"use client";

import { Box, HStack } from '@chakra-ui/react'
import ShopMapView from '@components/dashboard/shops/sub_screens/ShopMapView';
import ShopSatelliteView from '@components/dashboard/shops/sub_screens/ShopSatelliteView';
import ShopsListView from '@components/dashboard/shops/sub_screens/ShopsListView';
import SubNavItem from '@components/general/SubNavItem';
import React, { useState } from 'react'

const Shops = () => {
  const [currentSubNav, setCurrentSubNav] = useState("list");

  return (
    <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
      <Box width={"full"} bg={"#FCFCFC"}>
        <HStack px={14} spacing={0}>
          <SubNavItem
            height={"14"}
            isCurrent={currentSubNav.toLowerCase() === "map"}
            handleClick={() => setCurrentSubNav("map")}
            title={"MAP"}
            fontSize={"text-sm"}
          />
          <SubNavItem
            height={"14"}
            isCurrent={currentSubNav.toLowerCase() === "satellite"}
            handleClick={() => setCurrentSubNav("satellite")}
            title={"SATELLITE"}
            fontSize={"text-sm"}
          />
          <SubNavItem
            height={"14"}
            isCurrent={currentSubNav.toLowerCase() === "list"}
            handleClick={() => setCurrentSubNav("list")}
            title={"LIST"}
            fontSize={"text-sm"}
          />
        </HStack>
      </Box>

      <Box>
        {currentSubNav === "map" ? <ShopMapView />
          : currentSubNav === "satellite" ? <ShopSatelliteView />
            : currentSubNav === "list" && <ShopsListView />
        }
      </Box>
    </Box>
  )
}

export default Shops