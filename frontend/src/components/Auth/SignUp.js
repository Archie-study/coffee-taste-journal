import React, { useState } from 'react';
import {
  Box, Button, Flex, FormControl, FormLabel, Heading, Input, Link, Text, VStack
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const user = { username, email, password };

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        navigate('/signin');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to sign up');
      }
    } catch (error) {
      setError('Failed to sign up. Please try again.');
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
          <Text fontSize="md">Create an account and join the coffee community!</Text>
          {error && <Text color="red.500">{error}</Text>}
          <form onSubmit={handleSignUp}>
            <FormControl isRequired>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input
                id='username'
                type='text'
                placeholder='Choose a username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input
                id='email'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                type='password'
                placeholder='Create a password'
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
              Sign Up
            </Button>
          </form>
          <Text mt={6}>
            Already have an account? <Link as={RouterLink} to="/signin" color="#753D2A">Sign in here!</Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default SignUp;
