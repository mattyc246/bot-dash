import React from 'react';

import { Button } from '@mantine/core';

import Layout from '../shared/Layout';

import { supabase } from '../../services/supabase';

const Dashboard = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <Layout></Layout>
  );
};

export default Dashboard;
