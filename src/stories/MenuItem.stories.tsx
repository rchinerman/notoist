import React from 'react';
import { MenuItem } from '../common/MenuItem';
import { FaBeer } from 'react-icons/fa';

export default {
  title: 'MenuItem',
  component: MenuItem,
};

export const Base = () => <MenuItem label='Menu Item' Icon={FaBeer} />;
