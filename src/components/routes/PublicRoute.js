import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const session = useSelector((state) => state.auth?.session);

  if (session !== null) return <Navigate to="/dashboard" />;

  return children;
};

export default PublicRoute;
