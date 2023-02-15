import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import FullPageLoader from '../components/shared/FullPageLoader';
import Home from '../components/pages/Home';

import { setIsLoaded, setSession } from '../slices/authSlice';
import { supabase } from './supabase';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const Routers = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector((state) => state.auth?.isLoaded);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();

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
