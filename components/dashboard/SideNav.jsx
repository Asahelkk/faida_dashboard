import { Center, HStack, Text, Box, VStack } from "@chakra-ui/react"
import { FiLogOut } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import { IoSettingsOutline, IoArchiveOutline } from "react-icons/io5"
import { IoIosAdd } from "react-icons/io"
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
            w={"240px"}
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
                    width={100}
                    className='h-auto w-auto'
                />
            </Box>

            <VStack gap={"3"} p={"2"} h={"55%"}>
                {menu_list.map((menu, key) => (
                    <MenuItem
                        key={key}
                        icon={menu.icon}
                        title={menu.name}
                        link={menu.to}
                        subs={menu?.subs}
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
    subs,
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
        {isCurrent &&
            subs?.length > 0 &&
            subs?.map((sub, index) => (
                <SubMenu
                    key={index}
                    icon={sub?.icon}
                    title={sub?.name}
                    link={sub?.to}
                />
            ))}
    </Box>
);

const SubMenu = ({ icon, title, link }) => (
    <Link href={link}>
        <Box
            mt={3}
            cursor={"pointer"}
            borderRadius={"md"}
            w={"full"}
            _className={"hover:scale-105 transition-all"}
            pl={6}
        >
            <HStack gap={"0.5"} h={"8"}>
                {/* icon */}
                <Center
                    h={"5"}
                    w={"5"}
                    textColor={"white"}
                    fontSize={"lg"}
                >
                    {icon}
                </Center>

                {/* name */}
                <Text textColor={"white"} fontSize={"sm"}>{title}</Text>
            </HStack>
        </Box>
    </Link>

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
        icon: <IoArchiveOutline />,
        subs: [
            {
                name: "Create Category",
                to: "/dashboard/categories",
                icon: <IoIosAdd />,
            },
            {
                name: "Create SubCategory",
                to: "/dashboard/sub_categories",
                icon: <IoIosAdd />,
            },
        ]
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