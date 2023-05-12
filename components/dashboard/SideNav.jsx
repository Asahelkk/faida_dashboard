import { Center, HStack, Text, Box, VStack } from "@chakra-ui/react"
import { FiLogOut } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import { IoSettingsOutline, IoArchiveOutline } from "react-icons/io5"
import { AiOutlineShop } from "react-icons/ai"
import { FaRegUser } from "react-icons/fa"
import Image from 'next/image';
import Link from "next/link"
import { useState } from "react";

const SideNav = ({ show }) => {
    const [current, setCurrent] = useState("dashboard");

    const handleCurrent = (selected) => {
        setCurrent(selected.toLowerCase())
    }

    return (
        <Box
            w={"250px"}
            bg={"#161433"}
            className={`h-screen ${!show && "hidden"} ease-in-out `}
            flexShrink={0}
            px={5}
        >
            {/* Logo */}
            <Box h={"150px"} display={"flex"} alignItems={"center"}>
                <Image
                    src="/assets/images/Faida_App_Logo-012.png"
                    alt="Faida"
                    height={100}
                    width={150}
                />
            </Box>

            <VStack gap={"3"} p={"2"} h={"55%"}>
                {menu_list.map((menu, key) => (
                    <MenuItem
                        key={key}
                        icon={menu.icon}
                        title={menu.name}
                        link={menu.to}
                        isCurrent={menu.name.toLowerCase() === current}
                        handleClick={() => handleCurrent(menu.name)}
                    />
                ))}
            </VStack>

            <Box p={"3"}>
                <Box
                    as="button"
                    cursor={"pointer"}
                    borderRadius={"md"}
                    className={"hover:scale-95"}
                    w={"full"}
                    onClick={() => { }}
                    _hover={{ bg: "#8E7CFB" }}
                    _focus={{ bg: "#8E7CFB" }}
                >
                    <HStack gap={"2"} h={"12"} px={3}>
                        {/* icon */}
                        <Center
                            h={"5"}
                            w={"5"}
                            textColor={"white"}
                            fontSize={"xl"}
                        >
                            <FiLogOut />
                        </Center>

                        <Text textColor={"white"} fontSize={"sm"}>
                            Logout
                        </Text>
                    </HStack>
                </Box>

            </Box>
        </Box>
    )
}

export default SideNav;

const MenuItem = ({
    icon,
    title,
    link,
    isCurrent,
    handleClick,
}) => (
    <Box w={"full"}>
        <Link href={link}>
            <Box
                cursor={"pointer"}
                borderRadius={"md"}
                bg={isCurrent && "#8E7CFB"}
                w={"full"}
                onClick={handleClick}
                _hover={{
                    bg: "#8E7CFB",
                }}
            >
                <HStack gap={"2"} h={"12"} px={3}>
                    {/* icon */}
                    <Center
                        h={"5"}
                        w={"5"}
                        textColor={"white"}
                        fontSize={"xl"}
                    >
                        {icon}
                    </Center>

                    {/* name */}
                    <Text textColor={"white"} fontSize={"sm"}>{title}</Text>
                </HStack>
            </Box>
        </Link>

    </Box>
);


const menu_list = [
    {
        name: "Dashboard",
        to: "/dashboard",
        icon: <MdDashboard />
    },
    {
        name: "Shops",
        to: "/dashboard/shops",
        icon: <AiOutlineShop />
    },
    {
        name: "Products",
        to: "/dashboard/products",
        icon: <IoArchiveOutline />
    },
    {
        name: "User Accounts",
        to: "/dashboard/user_accounts",
        icon: <FaRegUser />
    },
    {
        name: "Settings",
        to: "/dashboard/settings",
        icon: <IoSettingsOutline />
    },
]