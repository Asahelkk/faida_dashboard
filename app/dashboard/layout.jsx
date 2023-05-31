"use client";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import SideNav from "@components/dashboard/SideNav"
import TopNav from "@components/dashboard/TopNav";
import { useRouter } from 'next/navigation';
import { useUserStore } from '@utils/zustand/Store';

const Layout = ({ children }) => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const [showSideBar, setShowSideBar] = useState(true);

  if (!user?.token) {
    router.push('/sign_in');
    return;
  }

  const handleToggle = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <Box display={"flex"} flexDirection={"row"} bg={"#F4F4F4"} className={"h-screen"}>
      <SideNav show={showSideBar} />

      <Box minHeight={"full"} width={"100%"} ml={0}>
        <TopNav toggleSideBar={handleToggle} />
        {children}
      </Box>
    </Box>
  );
}

export default Layout