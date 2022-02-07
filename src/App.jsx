import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, Content } from './components';
import { Container } from './styled-components/common';
import { useTheme } from './hooks/useTheme';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.background};
`;

export const App = () => {
  const { theme, hadleSwitchTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const handleToggleChanged = () => {
    setChecked(!checked);
    hadleSwitchTheme();
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container maxWidth='40%' margin='0 auto'>
          <Header onToggleChanged={handleToggleChanged} />
          <Content />
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
};
