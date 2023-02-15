import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FullPageLoader from '../components/shared/FullPageLoader';
import Home from '../components/pages/Home';
import Dashboard from '../components/pages/Dashboard';
import SignUp from '../components/pages/SignUp';

import { setIsLoaded, setSession } from '../slices/authSlice';
import { supabase } from './supabase';

import PublicRoute from '../components/routes/PublicRoute';
import PrivateRoute from '../components/routes/PrivateRoute';

const router = createBrowserRouter([
  process.env.NODE_ENV === 'development'
    ? {
        path: '/sign_up',
        element: (
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        )
      }
    : null,
  {
    path: '/',
    element: (
      <PublicRoute>
        <Home />
      </PublicRoute>
    )
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  }
]);

const Routers = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.auth?.isLoaded);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();

      console.log(data);

      if (data?.session) {
        dispatch(setSession(data.session));
      }

      dispatch(setIsLoaded(true));
    };

    fetchSession();

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch(setSession(session));
    });
  }, [dispatch]);

  if (!isLoaded) {
    return <FullPageLoader />;
  }

  return <RouterProvider router={router} />;
};

export default Routers;
