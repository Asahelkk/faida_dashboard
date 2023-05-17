"use client";

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const SubNavItem = ({ title, height, isCurrent, handleClick, fontSize, ...rest }) => {
  return (
    <Box
      as="button"
      h={height ? height : "20"}
      px={1}
      width={"150px"}
      cursor={"pointer"}
      borderRadius={"none"}
      className={`text-black ${fontSize} text-start ${isCurrent ? "text-primary_color font-semibold" : "text-black"
        }`}
      _hover={{
        bg: "white",
        borderBottomColor: "#8E7CFB",
        borderBottomWidth: "4px",
        textColor: "#8E7CFB",
      }}
      _focus={{
        bg: "white",
        borderBottomColor: "#8E7CFB",
        textColor: "#8E7CFB",
      }}
      bg={isCurrent && "white"}
      fontWeight={isCurrent ? "semibold" : "normal"}
      borderBottomWidth={"4px"}
      borderBottomColor={isCurrent ? "#8E7CFB" : "none"}
      onClick={handleClick}
      {...rest}
    >
      <Text letterSpacing={1}>{title}</Text>
    </Box>
  )
}

export default SubNavItem