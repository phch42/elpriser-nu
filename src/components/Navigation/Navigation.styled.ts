import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  width: 100%;
  min-width: 0;
  padding: 0.25rem;
  border-radius: 10px;
  background: #201e1e;
`;

export const NavigationLogo = styled.img`
  display: block;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  object-fit: contain;
`;

export const NavigationLink = styled.button<{ $active: boolean }>`
  flex: 0 0 auto;
  min-width: 0;
  min-height: 44px;
  padding: 0.5rem 0.3rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${({ $active }) =>
    $active ? 'var(--color-accent)' : '#ffffff'};
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    color: ${({ $active }) =>
      $active ? 'var(--color-accent)' : 'var(--color-text)'};
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: -2px;
  }

  &:first-of-type {
    margin-left: auto;
  }
`;