import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 100vh;
  padding: 1.5rem 1rem;
  background: var(--color-background);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  display: block;
  width: 44px;
  height: 44px;
  object-fit: contain;
`;

export const SettingsButton = styled.button`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-top: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-accent);
  font-size: 1.25rem;

  &:hover {
    color: var(--color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

export const MainContent = styled.main`
  max-width: 1440px;
  margin: 1.5rem auto 0;
`;