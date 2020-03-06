import React from 'react';
import { Menu } from '../common/Menu';
import { MenuItem } from '../common/MenuItem';
import { InboxIcon, CalendarIcon, AltCalendarIcon } from '../common';

export default {
  title: 'Menu',
  component: Menu,
};

export const Base = () => (
  <Menu>
    <MenuItem label='Inbox' Icon={InboxIcon} />
    <MenuItem label='Today' isActive Icon={CalendarIcon} />
    <MenuItem label='Next 7 days' Icon={AltCalendarIcon} />
  </Menu>
);
