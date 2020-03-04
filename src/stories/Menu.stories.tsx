import React from 'react';
import { Menu } from '../components/Menu';
import { MenuItem } from '../components/MenuItem';
import { FaBeer } from 'react-icons/fa';

export default {
  title: 'Menu',
  component: Menu,
};

export const Base = () => (
  <Menu>
    <MenuItem label='Menu Item' Icon={FaBeer} />
    <MenuItem label='Menu Item' Icon={FaBeer} />
    <MenuItem label='Menu Item' Icon={FaBeer} />
    <MenuItem label='Menu Item' Icon={FaBeer} />
  </Menu>
);
