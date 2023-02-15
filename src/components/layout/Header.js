import React from 'react';
import {
  ActionIcon,
  Burger,
  Flex,
  Group,
  Header as MantineHeader,
  MediaQuery
} from '@mantine/core';

import ColorModeSwitcher from '../shared/ColorModeSwitcher';
import { IconLogout } from '@tabler/icons-react';

const Header = ({ opened, setOpened }) => {
  return (
    <MantineHeader height={{ base: 70 }} p="md">
      <Flex h="100%" align="center" justify="space-between">
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="xs"
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'block' }}>
          <div />
        </MediaQuery>
        <Group align="flex-end">
          <ColorModeSwitcher />
          <ActionIcon variant="subtle">
            <IconLogout size={18} />
          </ActionIcon>
        </Group>
      </Flex>
    </MantineHeader>
  );
};

export default Header;
