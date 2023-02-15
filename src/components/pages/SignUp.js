import React from 'react';

import { Center, Flex } from '@mantine/core';

import ColorModeSwitcher from '../shared/ColorModeSwitcher';
import SignUpForm from '../forms/SignUpForm';

const SignUp = () => {
  return (
    <Flex pos="relative" direction="column" h="100vh" w="100%">
      <Flex
        w="100vw"
        pos="absolute"
        top="0"
        left="0"
        p="lg"
        align="center"
        justify="flex-end"
      >
        <ColorModeSwitcher />
      </Flex>
      <Center sx={{ flex: 1 }}>
        <SignUpForm />
      </Center>
    </Flex>
  );
};

export default SignUp;
