import React from 'react';
import { Button, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CoffeeList = () => {
  const navigate = useNavigate();

  // Fungsi untuk menangani logout
  const handleLogout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem('token');

    // Redirect ke halaman SignIn
    navigate('/signin');
  };

  return (
    <Box>
      <Heading>Coffee Taste Journal</Heading>
      {/* Konten Coffee List */}
      
      {/* Tombol Logout */}
      <Button
        onClick={handleLogout}
        backgroundColor="#753D2A"
        _hover={{ backgroundColor: "#3B2117" }}
        color="white"
        mt={4}
      >
        Logout
      </Button>
    </Box>
  );
};

export default CoffeeList;
