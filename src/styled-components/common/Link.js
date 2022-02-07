import styled from 'styled-components';

export const Link = styled.a`
  color: ${(p) => p.theme.colors.link.text};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
