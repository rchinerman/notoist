import React from 'react';
import { MenuItem } from '../components/MenuItem';
import { FaBeer } from 'react-icons/fa';

export default {
  title: 'MenuItem',
  component: MenuItem,
};

export const Base = () => <MenuItem label='Menu Item' Icon={FaBeer} />;
