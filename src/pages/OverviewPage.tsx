// src/pages/OverViewPage.tsx
import { useMemo } from 'react';
import PriceSummary from '../components/PriceSummary/PriceSummary';
import HourlyPrices from '../components/HourlyPrices/HourlyPrices';
import { usePrices } from '../hooks/usePrices';
import type { PriceRegion } from '../modules/prices/price.types';
import { OverviewHeading } from './OverviewPage.styled';

export default function OverviewPage() {
  const region: PriceRegion = 'DK1';
  const today = useMemo(() => new Date(), []);

  const { prices, isLoading, error } = usePrices(today, region);

  return (
    <section>
      <OverviewHeading>Oversigt</OverviewHeading>

      {isLoading && <p>Henter elpriser...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <>
          <PriceSummary prices={prices} />
          <HourlyPrices prices={prices} />
        </>
      )}
    </section>
  );
}