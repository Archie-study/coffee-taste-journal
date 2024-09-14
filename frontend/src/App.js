import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CoffeeList from './CoffeeJournal/CoffeeList';
import AboutMe from './components/AboutMe'; // Import AboutMe
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/about' element={<AboutMe />} /> {/* Rute untuk AboutMe */}
          <Route path='/' element={
            <ProtectedRoute>
              <CoffeeList />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
