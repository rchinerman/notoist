import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';

export type MenuItemType = (props: MenuItemProps) => Element;
type MenuItemProps = { label: string; Icon: IconType };

export const MenuItem = ({ label, Icon }: MenuItemProps) => (
  <Container>
    <Icon />
    <span>{label}</span>
  </Container>
);

const Container = styled.li`
  list-style-type: none;
  padding: 5px 16px 5px 5px;

  &:hover {
    background-color: ${props => props.theme.color.white};
  }
`;
