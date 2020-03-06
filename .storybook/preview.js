import React, { Fragment } from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import { GlobalStyle } from '../src/globalStyles';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {storyFn()}
    </Fragment>
  </ThemeProvider>
));
