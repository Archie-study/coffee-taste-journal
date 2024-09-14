import React, { useState } from 'react';
import { Box, Flex, Text, Button, Icon, Spacer, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username = localStorage.getItem('username'); // Ambil nama user dari localStorage

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/signin');
  };

  const goToDevPage = () => {
    navigate('/about');
  };

  return (
    <Flex as="nav" p={4} backgroundColor="#753D2A" color="white" align="center">
      {/* Nama Aplikasi di tengah */}
      <Spacer />
      <Text fontSize="xl" fontWeight="bold" textAlign="center">
        Coffee Taste Journal
      </Text>
      <Spacer />

      {/* Hamburger Menu untuk mode mobile */}
      <Box display={{ base: "block", md: "none" }} onClick={onOpen} cursor="pointer" ml={4}>
        <Icon as={FaBars} w={6} h={6} />
      </Box>

      {/* Menu di mode desktop */}
      <Flex display={{ base: "none", md: "flex" }} align="center">
        <Text
          cursor="pointer"
          onClick={goToDevPage}
          fontWeight="bold"
          mr={4}
          _hover={{
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
          }}
        >
          Dev
        </Text>
        <Flex align="center">
          <Text mr={2}>{username}</Text>
          <Icon as={FaUserCircle} boxSize={6} />
        </Flex>
        <Button
          onClick={handleLogout}
          backgroundColor="white"
          color="#753D2A"
          ml={4}
          _hover={{ backgroundColor: "#3B2117", color: "white" }}
        >
          Logout
        </Button>
      </Flex>

      {/* Drawer untuk navigasi di mode mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {/* Navigasi di Drawer */}
            <Flex direction="column" align="start">
              {/* Baris 1: Icon Profil dan Nama */}
              <Flex align="center" mb={4}>
                <Icon as={FaUserCircle} boxSize={6} mr={2} />
                <Text>{username}</Text>
              </Flex>

              {/* Baris 2: Dev */}
              <Text
                cursor="pointer"
                fontWeight="bold"
                mb={4}
                onClick={goToDevPage}
              >
                Dev
              </Text>

              {/* Baris 3: Logout */}
              <Button
                onClick={handleLogout}
                backgroundColor="#753D2A"
                color="white"
                _hover={{ backgroundColor: "#3B2117" }}
              >
                Logout
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
