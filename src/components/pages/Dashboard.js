import { Button } from '@mantine/core';
import React from 'react';
import { supabase } from '../../services/supabase';

const Dashboard = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <>
      <Button onClick={() => handleSignOut()}>Sign out</Button>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
