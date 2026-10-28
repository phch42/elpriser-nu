// src/pages/CurrentPricePage/CurrentPricePage.tsx
import { useMemo } from 'react';
import { usePrices } from '../../hooks/usePrices';
import type { PriceRegion } from '../../modules/prices/price.types';
import {
  CurrentPriceHeading,
  CurrentPriceContainer,
  CurrentPriceCircle,
  CurrentPriceValue,
  CurrentPriceUnit,
  CurrentPriceTime,
} from './CurrentPricePage.styled';

export default function CurrentPricePage() {
  const region: PriceRegion = 'DK1';
  const today = useMemo(() => new Date(), []);

  const { prices, isLoading, error } = usePrices(today, region);

  const now = new Date();

  const currentPrice = prices.find((price) => {
    const start = new Date(price.time_start);
    const end = new Date(price.time_end);

    return now >= start && now < end;
  });

  return (
    <section>
      <CurrentPriceHeading>
        Elprisen lige nu
      </CurrentPriceHeading>

      {isLoading && <p>Henter elpriser...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        currentPrice ? (
          <CurrentPriceContainer>
            <CurrentPriceCircle>
              <CurrentPriceValue>
                {currentPrice.DKK_per_kWh.toLocaleString('da-DK', {
                  minimumFractionDigits: 3,
                  maximumFractionDigits: 3,
                })}{' '}
                KR
              </CurrentPriceValue>

              <CurrentPriceUnit>PR. KWH</CurrentPriceUnit>
            </CurrentPriceCircle>

            <CurrentPriceTime>
              Kl.{' '}
              {new Date(currentPrice.time_start).toLocaleTimeString(
                'da-DK',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
              {' – '}
              {new Date(currentPrice.time_end).toLocaleTimeString(
                'da-DK',
                {
                  hour: '2-digit',
                  minute: '2-digit',
                }
              )}
            </CurrentPriceTime>
          </CurrentPriceContainer>
        ) : (
          <p>Ingen pris tilgængelig for den aktuelle time.</p>
        )
      )}
    </section>
  );
}