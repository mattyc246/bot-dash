import React, { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';

import Header from '../layout/Header';
import Navbar from '../layout/Navbar';

const Layout = ({ children }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0]
        }
      }}
      navbar={<Navbar opened={opened} />}
      header={<Header opened={opened} setOpened={setOpened} />}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
