import styled from 'styled-components';

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  background: #27282b;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-height: 76px;
    padding: 0 2rem;
    background: #201e1e;
  }

  @media (min-width: 1200px) {
    padding: 0 3rem;
  }
`;

export const SettingsButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 44px;
  height: 44px;
  margin: 0.5rem 0.75rem 0;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--color-accent);
  font-size: 1.5rem;

  &:hover {
    color: var(--color-text);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    align-self: center;
    margin: 0;
    font-size: 1.75rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1600px;
  margin: 1.5rem auto 0;
  padding: 0 1rem;

  @media (min-width: 768px) {
    margin-top: 1.5rem;
    padding: 0 2rem;
  }

  @media (min-width: 1200px) {
    margin-top: 2rem;
    padding: 0 3rem;
  }
`;
