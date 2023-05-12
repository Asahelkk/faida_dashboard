"use client";

import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const BreadCrumb = ({ title, subtitle }) => {
  return (
    <Box className="flex items-end gap-1">
      <Text className={'capitalize'} fontWeight={"semibold"} fontSize={"3xl"}>
        {title} {subtitle && ':'}
      </Text>
      {subtitle && (
        <Text className={'capitalize'} fontSize={"3xl"}>
          {subtitle}
        </Text>
      )}
    </Box>
  );
};

export default BreadCrumb;