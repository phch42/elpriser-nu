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
}

export default function HourlyPrices({ prices }: HourlyPricesProps) {
  if (prices.length === 0) {
    return null;
  }

  const lowestPrice = Math.min(
    ...prices.map((price) => price.DKK_per_kWh)
  );

  const highestPrice = Math.max(
    ...prices.map((price) => price.DKK_per_kWh)
  );

  return (
    <HourlyPricesContainer aria-label="Timepriser">
      {prices.map((price) => (
        <HourlyPriceRow key={price.time_start}>
          <HourlyTime>
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
            {price.DKK_per_kWh.toFixed(2)} kr.
          </HourlyPriceValue>
        </HourlyPriceRow>
      ))}
    </HourlyPricesContainer>
  );
}