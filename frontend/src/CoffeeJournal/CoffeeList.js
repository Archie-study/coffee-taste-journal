import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header'; // Import komponen Header

const CoffeeList = () => {
  return (
    <Box>
      {/* Tambahkan Header */}
      <Header />

      {/* Konten Halaman CoffeeList */}
      <Box p={8}>
        <Heading size="lg">Welcome to Coffee Taste Journal</Heading>
        <Text mt={4}>Here is the list of your coffee tastings...</Text>
        {/* Daftar Coffee List bisa ditambahkan di sini */}
      </Box>
    </Box>
  );
};

export default CoffeeList;
