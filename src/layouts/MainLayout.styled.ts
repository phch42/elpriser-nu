import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  background: var(--color-background);
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;

  h1 {
    margin: 0;
    color: var(--color-accent);
    font-size: 1.5rem;
  }
`;

export const MainContent = styled.main`
  max-width: 1440px;
  margin: 2rem auto 0;
`;
