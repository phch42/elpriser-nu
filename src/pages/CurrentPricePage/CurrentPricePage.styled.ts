import styled from 'styled-components';

export const CurrentPriceHeading = styled.h2`
  margin: 0;
  color: var(--color-text);
  font-size: 1.65rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const CurrentPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin: 2rem auto 0;
`;

export const CurrentPriceCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 280px;
  max-width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #201e1e;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    inset: 12px;
    border: 1px dashed #004d12;
  }

  &::after {
    inset: 24px;
    border: 1px dashed var(--color-accent);
  }
`;

export const CurrentPriceValue = styled.span`
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
  color: var(--color-accent);
`;

export const CurrentPriceUnit = styled.span`
  position: relative;
  z-index: 1;
  margin-top: 0.4rem;
  color: var(--color-accent);
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CurrentPriceTime = styled.p`
  margin: 0;
  color: var(--color-accent);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;