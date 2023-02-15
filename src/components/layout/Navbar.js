import React from 'react';
import { Navbar as MantineNavbar, Text } from '@mantine/core';

const Navbar = ({ opened }) => {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Text>Application navbar</Text>
    </MantineNavbar>
  );
};

export default Navbar;
