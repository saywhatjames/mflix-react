import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenuClicked } from "../../store/menu.actions";
import { SideMenu } from "../side-menu/side-menu";
import '../header/header.scss';

export const Header = () => {
  const dispatch: Dispatch<any> = useDispatch()
  const toggleMenu = React.useCallback(
    () => {
      dispatch(toggleMenuClicked())
    },
    []
  );

  return (
    <div>
      
      <Flex alignItems='center' mx="10" py="3">
        <IconButton variant='ghost' colorScheme="whiteAlpha" onClick={() => toggleMenu()} aria-label='Toggle Menu' size='lg'  icon={<HamburgerIcon color="white" boxSize={8}/>} />
        <div className="d-flex flex-column px-3"><span className="accent fs-4 fw-500">MFLIX</span><span className="secondary-color">by James</span></div>
        <Spacer />
        <BellIcon  color='white' boxSize={8} />
      </Flex>
      <SideMenu ></SideMenu>
    </div>
  );
};