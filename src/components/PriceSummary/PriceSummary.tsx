// src/components/PriceSummary/PriceSummary.tsx
import { getDailyPriceSummary } from '../../modules/prices/priceCalculations';
import type { HourlyPrice } from '../../modules/prices/price.types';
import {
  SummaryContainer,
  SummaryCard,
  PriceCircle,
  SummaryPrice,
  PriceUnit,
  SummaryLabel,
} from './PriceSummary.styled';

interface PriceSummaryProps {
  prices: HourlyPrice[];
}

export default function PriceSummary({ prices }: PriceSummaryProps) {
  const summary = getDailyPriceSummary(prices);

  if (!summary) {
    return null;
  }

  return (
    <SummaryContainer>
      <SummaryCard>
        <PriceCircle>
          <SummaryPrice>
            {summary.lowestPrice.DKK_per_kWh.toFixed(2)}
            {' KR '}
          </SummaryPrice>
          <PriceUnit>PR. KWH</PriceUnit>
        </PriceCircle>

        <SummaryLabel>Laveste pris</SummaryLabel>
      </SummaryCard>

      <SummaryCard>
        <PriceCircle>
          <SummaryPrice>
            {summary.highestPrice.DKK_per_kWh.toFixed(2)}
            {' KR '}
          </SummaryPrice>
          <PriceUnit>PR. KWH</PriceUnit>
        </PriceCircle>

        <SummaryLabel>Højeste pris</SummaryLabel>
      </SummaryCard>
    </SummaryContainer>
  );
}