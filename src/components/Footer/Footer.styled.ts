import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  padding: 1rem;
  background: #201e1e;
`;

export const FooterText = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 0.85rem;
  text-align: center;
`;

export const Highlight = styled.span`
  color: var(--color-accent);
  font-weight: 700;
`;