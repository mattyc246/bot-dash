import React from 'react';
import {
  Navbar as MantineNavbar,
  NavLink as MantineNavLink
} from '@mantine/core';
import {
  IconAlien,
  IconBoxMultiple,
  IconBuildingCastle,
  IconCalendarEvent,
  IconHome2,
  IconMathFunction,
  IconMultiplier2x,
  IconTournament,
  IconTrophy
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ opened }) => {
  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <MantineNavLink
        component={NavLink}
        to="/dashboard"
        label="Dashboard"
        icon={<IconHome2 size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="2x Events"
        icon={<IconMultiplier2x size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="10x Events"
        icon={<IconAlien size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="Super Raids"
        icon={<IconBuildingCastle size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="CvC Event"
        icon={<IconTrophy size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="Tournaments"
        icon={<IconTournament size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="Events"
        icon={<IconCalendarEvent size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="Fusion / Fragments"
        icon={<IconMathFunction size={18} stroke={1.5} />}
      />
      <MantineNavLink
        component={NavLink}
        to="/2x-events"
        label="Spreadsheet"
        icon={<IconBoxMultiple size={18} stroke={1.5} />}
      />
    </MantineNavbar>
  );
};

export default Navbar;
