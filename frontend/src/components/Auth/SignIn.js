import React, { useState } from 'react';
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to sign in');
      }
    } catch (error) {
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <Flex 
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      backgroundImage="url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"  // Ganti path sesuai lokasi gambar
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" backgroundColor={'white'}>
        <VStack spacing={8}>
          <Heading size="lg" fontWeight='bold' color="#753D2A">Coffee Taste Journal</Heading>
          <Text fontSize="md">Log in and start your coffee journey!</Text>
          {error && <Text color="red.500">{error}</Text>}
          <form onSubmit={handleSignIn}>
            <FormControl isRequired>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input
                id='username'
                type='text'
                placeholder='Enter your username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button 
              backgroundColor="#753D2A"
              _hover={{ backgroundColor: "#3B2117" }} 
              color="white" 
              size='lg'
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <Text mt={6}>
            Don't have an account? <Link as={RouterLink} to="/signup" color="#753D2A">Sign up here!</Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default SignIn;
