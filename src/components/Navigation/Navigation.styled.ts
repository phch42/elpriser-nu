
import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.25rem;

  @media (max-width: 767px) {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    padding: 0.75rem 0.25rem;
    background: var(--color-surface);
    border-top: 1px solid #3a3a3a;
  }
`;

export const NavigationLink = styled.button<{ $active: boolean }>`
  border: none;
  background: transparent;
  color: ${({ $active }) =>
    $active ? 'var(--color-accent)' : 'var(--color-muted)'};
  padding: 0.5rem 0;
  font-size: 0.85rem;
  font-weight: 500;

  &:hover {
    color: var(--color-text);
  }
`;
