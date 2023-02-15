import React from 'react';

import { Flex, Loader } from '@mantine/core';

const FullPageLoader = () => {
  return (
    <Flex h="100vh" w="100%" align="center" justify="center">
      <Loader color="red" size="xl" variant="dots" />
    </Flex>
  );
};

export default FullPageLoader;
