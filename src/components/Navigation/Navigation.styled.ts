import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.25rem;
  width: 100%;
  margin-top: 1rem;
`;

export const NavigationLink = styled.button<{ $active: boolean }>`
  flex: 1;
  min-width: 0;
  min-height: 44px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${({ $active }) =>
    $active ? 'var(--color-accent)' : 'var(--color-muted)'};
  padding: 0.5rem 0.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    color: var(--color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: -2px;
  }
`;
