import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    red: '#DB4C3F', // main todoist color
    darkRed: '#CA2100', // darker red used for border under header
    lightGray: '#FAFAFA', // general background for light theme
    white: '#FFFFFF',
  },
  font: {
    normal: '#333',
    light: 'gray', // it really is just the word
    hover: '#DD4B39',
    label: '#999', // arhived projects label
    date: '#808080', // date next to Today
    header: '#202020', // empty state header
    body: '#777', // empty state body
    count: '#aaa', // number next to a label
  },
  icon: {
    normal: 'gray',
    hover: '#202020',
    header: 'white',
    blue: '#246fe0',
    green: '#058527',
    purple: '#692fc2',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
