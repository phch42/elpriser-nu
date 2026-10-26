
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavigationLink = styled.button`
  border: none;
  background: transparent;
  color: var(--color-muted);
  padding: 0.5rem 0;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    color: var(--color-text);
  }
`;
