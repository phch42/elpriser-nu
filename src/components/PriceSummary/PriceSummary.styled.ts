
import styled from 'styled-components';

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
`;

export const SummaryCard = styled.div`
  min-width: 0;
  padding: 1rem;
  border-radius: 12px;
  background: var(--color-surface);
`;

export const SummaryLabel = styled.p`
  margin: 0 0 0.75rem;
  color: var(--color-muted);
  font-size: 0.8rem;
  line-height: 1.4;
`;

export const SummaryPrice = styled.p`
  margin: 0;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 700;
  overflow-wrap: anywhere;
`;
