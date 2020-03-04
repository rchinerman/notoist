import React, { ReactNode } from 'react';
import styled from 'styled-components';

type MenuProps = { children: ReactNode | Array<ReactNode> };

export const Menu = ({ children }: MenuProps) => <Container>{children}</Container>;

const Container = styled.ul`
  width: 250px;
`;
