import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box p={8}>
      <Heading size="lg" mb={4}>About Me</Heading>
      <Text fontSize="md">
        <strong>Nama:</strong> Made Acarya Mordekhai Karang
      </Text>
      <Text mt={2}>Developer of Coffee Taste Journal.</Text>
    </Box>
  );
};

export default AboutMe;
