import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import { Button, Card, Stack, TextInput, Title } from '@mantine/core';
import { supabase } from '../../services/supabase';
import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setIsLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error !== null) {
      showNotification({
        message: error?.message,
        color: 'red'
      });
      setIsLoading(false);
      return;
    }

    showNotification({
      message: 'Please sign in to continue.',
      color: 'green'
    });
    navigate('/');
  };

  const continueDisabled =
    !isEmail(email) ||
    !password ||
    !confirmPassword ||
    password !== confirmPassword;

  return (
    <Card shadow="xl" p="md" sx={{ minWidth: '300px' }}>
      <Title order={3} mb="lg" align="center">
        Sign Up
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
        <TextInput
          placeholder="Confirm Password"
          label="Confirm Password"
          size="md"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e?.target?.value)}
        />
        <Button
          mt="lg"
          color="red"
          onClick={handleSignUp}
          disabled={continueDisabled}
          loading={isLoading}
        >
          Continue
        </Button>
      </Stack>
    </Card>
  );
};

export default SignUpForm;
