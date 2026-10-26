import styled from 'styled-components';

export const PageLayout = styled.div`
  min-height: 100vh;
  padding: 1.5rem;
  background: var(--color-background);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
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

  @media (max-width: 767px) {
    padding-bottom: 5rem;
  }
`;