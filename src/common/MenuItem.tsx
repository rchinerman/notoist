import React from 'react';
import { IconType } from 'react-icons';
import { styled } from '../theme';

export type MenuItemType = (props: MenuItemProps) => Element;
type MenuItemProps = { label: string; isActive?: boolean; Icon: IconType };

export const MenuItem = ({ label, isActive = false, Icon }: MenuItemProps) => (
  <Container>
    <Icon />
    <Label isActive={isActive}>{label}</Label>
  </Container>
);

const Container = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 5px 16px 5px 5px;

  &:hover {
    background-color: ${props => props.theme.color.white};
  }
`;

type LabelProps = { isActive: boolean };
const Label = styled.span<LabelProps>`
  margin-left: 8px;
  color: ${props => props.theme.font.normal};
  font-size: 14px;
  font-weight: ${props => (props.isActive ? 700 : 400)};
`;
