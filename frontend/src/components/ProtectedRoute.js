import React from 'react';
import { Navigate } from 'react-router-dom';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Jika token tidak ada, redirect ke halaman login
  if (!token) {
    return <Navigate to="/signin" />;
  }

  // Jika token ada, tampilkan komponen yang dilindungi
  return children;
};

export default ProtectedRoute;
