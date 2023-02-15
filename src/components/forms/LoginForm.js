import React, { useState } from 'react';

import { Button, Card, Stack, TextInput, Title } from '@mantine/core';

import { supabase } from '../../services/supabase';
import { showNotification } from '@mantine/notifications';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      showNotification({
        message: error.message,
        color: 'red'
      });
      return;
    }
  };

  return (
    <Card shadow="xl" p="md" sx={{ minWidth: '300px' }}>
      <Title order={3} mb="lg" align="center">
        Sign In
      </Title>
      <Stack spacing="md">
        <TextInput
          placeholder="Email"
          label="Email"
          size="md"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
        />
        <TextInput
          placeholder="Password"
          label="Password"
          size="md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e?.target?.value)}
        />
        <Button onClick={handleLogin} mt="lg" color="red">
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};

export default LoginForm;
