// src/components/PriceSummary/PriceSummary.tsx

import type { HourlyPrice } from '../../modules/prices/price.types';
import { getDailyPriceSummary } from '../../modules/prices/priceCalculations';
import {
  SummaryContainer,
  SummaryCard,
  SummaryLabel,
  SummaryPrice,
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
        <SummaryLabel>Laveste pris i dag</SummaryLabel>
        <SummaryPrice>
          {summary.lowestPrice.DKK_per_kWh.toFixed(2)} kr.
        </SummaryPrice>
      </SummaryCard>

      <SummaryCard>
        <SummaryLabel>Højeste pris i dag</SummaryLabel>
        <SummaryPrice>
          {summary.highestPrice.DKK_per_kWh.toFixed(2)} kr.
        </SummaryPrice>
      </SummaryCard>
    </SummaryContainer>
  );
}
