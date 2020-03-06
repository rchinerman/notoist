import React, { ReactNode } from 'react';
import { styled } from '../theme';
import { Menu, MenuItem } from '../common';
import { InboxIcon, CalendarIcon, AltCalendarIcon } from '../common';

type SidebarProps = { children: ReactNode | Array<ReactNode> };

export const Sidebar = ({}: SidebarProps) => (
  <Menu>
    <MenuItem label='Inbox' Icon={InboxIcon} />
    <MenuItem label='Today' Icon={CalendarIcon} />
    <MenuItem label='Next 7 days' Icon={AltCalendarIcon} />
  </Menu>
);

const Container = styled.ul`
  width: 250px;
`;
