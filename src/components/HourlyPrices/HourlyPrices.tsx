// src/components/HourlyPrices/HourlyPrices.tsx

import type { HourlyPrice } from '../../modules/prices/price.types';
import { getPriceColor } from '../../modules/prices/priceCalculations';
import {
  HourlyPricesContainer,
  HourlyPriceRow,
  HourlyTime,
  HourlyPriceValue,
} from './HourlyPrices.styled';

interface HourlyPricesProps {
  prices: HourlyPrice[];
  desktopScrollable?: boolean;
}

export default function HourlyPrices({
  prices,
  desktopScrollable = false,
}: HourlyPricesProps) {
  if (prices.length === 0) {
    return null;
  }

  const now = new Date();

  const lowestPrice = Math.min(
    ...prices.map((price) => price.DKK_per_kWh)
  );

  const highestPrice = Math.max(
    ...prices.map((price) => price.DKK_per_kWh)
  );

  const sortedPrices = [...prices].sort(
    (a, b) =>
      new Date(a.time_start).getTime() -
      new Date(b.time_start).getTime()
  );

  const currentHourIndex = sortedPrices.findIndex((price) => {
    const start = new Date(price.time_start);
    const end = new Date(price.time_end);

    return now >= start && now < end;
  });

  const orderedPrices =
    currentHourIndex >= 0
      ? [
          ...sortedPrices.slice(currentHourIndex),
          ...sortedPrices.slice(0, currentHourIndex),
        ]
      : sortedPrices;

  return (
    <HourlyPricesContainer
      aria-label="Timepriser"
      $desktopScrollable={desktopScrollable}
    >
      {orderedPrices.map((price) => (
        <HourlyPriceRow key={price.time_start}>
          <HourlyTime>
            kl.{' '}
            {new Date(price.time_start).toLocaleTimeString('da-DK', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </HourlyTime>

          <HourlyPriceValue
            style={{
              color: getPriceColor(
                price.DKK_per_kWh,
                lowestPrice,
                highestPrice
              ),
            }}
          >
            {price.DKK_per_kWh.toFixed(3)} kr.
          </HourlyPriceValue>
        </HourlyPriceRow>
      ))}
    </HourlyPricesContainer>
  );
}