import styled from 'styled-components';

export const SummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 360px;
  margin: 1.5rem auto;
`;

export const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`;

export const PriceCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  max-width: 100%;
  aspect-ratio: 1;
  border: 1px dashed var(--color-accent);
  border-radius: 50%;
  background: #201e1e;
  color: var(--color-text);
`;

export const SummaryPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

export const PriceUnit = styled.span`
  margin-top: 0.25rem;
  color: var(--color-muted);
  font-size: 0.7rem;
  font-weight: 500;
`;

export const SummaryLabel = styled.span`
  margin-top: 0.75rem;
  color: var(--color-text);
  font-size: 0.75rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;