'use client';

import { Box, HStack, Text } from '@chakra-ui/react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const TablePagination = ({
    pages,
    setPage,
    page,
    count
}) => {

    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            minWidth={"full"}
            px={0}
            gap={1.5}
        >
            <HStack spacing={3}>
                {page <= 1 ? (
                    <Box
                        fontSize="lg"
                        color="gray.500"
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                    >
                        <AiOutlineLeft />
                    </Box>
                ) : (
                    <Box
                        as="button"
                        fontSize="lg"
                        color="#8E7CFB"
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                        
                    >
                        <AiOutlineLeft />
                    </Box>
                )}

                {
                    pages.map((p, index) =>
                        <Text color="black" className={page === p ? `text-primary_color cursor-pointer` : `text-black cursor-pointer`} key={index} onClick={() => setPage(p)}>
                            {p}
                        </Text>
                    )
                }
 
                {page >= count ? (
                    <Box
                        fontSize="lg"
                        color="gray.500"
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                    >
                        <AiOutlineRight />
                    </Box>
                ) : (
                    <Box
                        as="button"
                        fontSize="lg"
                        color="#8E7CFB"
                        _active={{
                            transform: 'scale(0.98)',
                        }}
                        onClick={() => setPage(page + 1)}
                    >
                        <AiOutlineRight />
                    </Box>
                )}
            </HStack>
        </Box>
    )
}

export default TablePagination