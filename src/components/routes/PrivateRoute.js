import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const session = useSelector((state) => state.auth?.session);
  const location = useLocation();

  if (session === null)
    return <Navigate to="/" state={{ from: location.pathname }} />;

  return children;
};

export default PrivateRoute;
