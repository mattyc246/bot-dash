import React, { useState } from 'react';

import { Button, Card, Stack, TextInput, Title } from '@mantine/core';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Button mt="lg" color="red">
          Sign In
        </Button>
      </Stack>
    </Card>
  );
};

export default LoginForm;
