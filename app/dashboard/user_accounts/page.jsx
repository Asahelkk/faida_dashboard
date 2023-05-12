"use client";

import { Box, Center } from '@chakra-ui/react'
import AllUsers from '@components/dashboard/users/sub_screens/AllUsers';
import BreadCrumb from '@components/general/BreadCrumb'
import CustomButton from '@components/general/CustomButton';
import SubNavItem from '@components/general/SubNavItem';
import AddUserModal from '@components/modals/AddUserModal';
import React, { useState, useCallback } from 'react'
import { IoIosAdd } from "react-icons/io"

const UserAccounts = () => {
  const [currentSubNav, setCurrentSubNav] = useState("allusers");
  const [openAddUser, setOpenAddUser] = useState(false);

  const handleOpenAddUser = useCallback(() => {
    setOpenAddUser(true);
  }, []);

  const handleCloseUser = useCallback(() => {
    setOpenAddUser(false);
  }, []);

  return (
    <Box maxH={"91%"} overflowY={"scroll"} position={"relative"}>
      <Box pt={8} pb={5} pl={14}>
        <BreadCrumb title={"Users"} />
      </Box>
      <Box width={"full"} bg={"white"}>
        <Box display={"flex"} justifyContent={"space-between"} px={14}>
          <SubNavItem
            isCurrent={currentSubNav.toLowerCase() === "allusers"}
            handleClick={() => setCurrentSubNav("allusers")}
            title={"All Users"}
            fontSize={"text-lg"}
          />
          <Center>
            <CustomButton
              type="button"
              text="ADD USER"
              icon={<IoIosAdd className='text-xl' />}
              variant={"solid"}
              width={"200px"}
              fontSize={"12px"}
              handleClick={handleOpenAddUser}
            />
          </Center>

        </Box>
      </Box>
      <Box px={14}>
        {currentSubNav === "allusers" && <AllUsers />}
      </Box>

      <AddUserModal
        isOpen={openAddUser}
        onClose={handleCloseUser}
      />
    </Box>
  )
}

export default UserAccounts