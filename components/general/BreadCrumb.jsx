"use client";

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const BreadCrumb = ({ title, subtitle, fontSize }) => {
  return (
    <Box className="flex items-end gap-1">
      <Text className={'capitalize'} fontWeight={"semibold"} fontSize={fontSize ? fontSize : "3xl"} letterSpacing={1}>
        {title}{subtitle && ':'}
      </Text>

      {subtitle && (
        <Text className={'capitalize'} fontSize={fontSize ? fontSize : "3xl"} letterSpacing={1}>
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default BreadCrumb;