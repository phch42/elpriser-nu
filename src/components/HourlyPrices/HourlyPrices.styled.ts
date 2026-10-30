import styled from 'styled-components';

interface HourlyPricesContainerProps {
  $desktopScrollable?: boolean;
}

export const HourlyPricesContainer = styled.div<HourlyPricesContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin: 1.5rem auto;

  ${({ $desktopScrollable }) =>
    $desktopScrollable &&
    `
      @media (min-width: 1200px) {
        height: 600px;
        overflow-x: hidden;
        overflow-y: auto;
        padding-right: 0.35rem;

        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    `}
`;

export const HourlyPriceRow = styled.div`
  display: flex;
  flex-shrink: 0;
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
  font-weight: 400;
`;

export const HourlyPriceValue = styled.span`
  font-size: 0.9rem;
  font-weight: 400;
  text-align: right;
`;