import styled from 'styled-components';

export const HourlyPricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin: 1.5rem auto;
`;

export const HourlyPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: 48px;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: #201e1e;
`;

export const HourlyTime = styled.span`
  color: var(--color-text);
  font-size: 0.9rem;
  font-weight: 500;
`;

export const HourlyPriceValue = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  text-align: right;
`;