import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

type MenuItemProps = { label: string; Icon: IconType };

export const MenuItem = ({ label, Icon }: MenuItemProps) => (
  <li>
    <Icon />
    <span>{label}</span>
  </li>
);

const Container = styled.li`
  &:hover {
  }
`;
