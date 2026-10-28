import styled from 'styled-components';
import { NavLink } from 'react-router';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  min-width: 0;
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  min-width: 0;
  margin-right: 0.75rem;
`;

export const NavigationLink = styled(NavLink)`
  flex: 0 0 auto;
  min-width: 0;
  min-height: 44px;
  padding: 0.5rem 0.3rem;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  &.active {
    color: var(--color-accent);
  }

  &:hover {
    color: var(--color-text);
  }

  &.active:hover {
    color: var(--color-accent);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: -2px;
  }
`;

export const NavigationLogo = styled.img`
  display: block;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  margin-left: 1rem;
  object-fit: contain;
`;