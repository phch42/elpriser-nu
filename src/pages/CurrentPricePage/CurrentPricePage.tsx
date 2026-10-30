// src/pages/CurrentPricePage/CurrentPricePage.tsx

import { useMemo } from 'react';
import { usePrices } from '../../hooks/usePrices';
import { useSettings } from '../../context/SettingsContext';
import {
  CurrentPriceHeading,
  CurrentPriceContainer,
  CurrentPriceCircle,
  CurrentPriceValue,
  CurrentPriceUnit,
  CurrentPriceTime,
} from './CurrentPricePage.styled';

export default function CurrentPricePage() {
  const { settings } = useSettings();
  const region = settings.region;

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

      {!region ? (
        <p>Vælg venligst en region under indstillinger.</p>
      ) : (
        <>
          {isLoading && <p>Henter elpriser...</p>}
          {error && <p>{error}</p>}

          {!isLoading && !error && (
            currentPrice ? (
              <CurrentPriceContainer>
                <CurrentPriceCircle>
                  <CurrentPriceValue>
                    {currentPrice.DKK_per_kWh.toFixed(3)} KR
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
        </>
      )}
    </section>
  );
}