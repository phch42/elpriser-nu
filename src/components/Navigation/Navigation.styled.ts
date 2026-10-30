import styled from 'styled-components';
import { NavLink } from 'react-router';

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  min-width: 0;
  padding: 0.25rem;
  border-radius: 0;
  background: #201e1e;
`;

export const NavigationBrand = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 0.75rem;
  margin-left: 1rem;
`;

export const NavigationLogo = styled.img`
  display: block;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

export const NavigationTitle = styled.span`
  display: none;
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  min-width: 0;
  margin-right: 0.75rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  min-width: 0;
  min-height: 44px;
  padding: 0.5rem 0.3rem;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 700;
  line-height: 1;
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