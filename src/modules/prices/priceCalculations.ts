// src/modules/prices/priceCalculations.ts
import type { HourlyPrice } from './price.types';

export interface DailyPriceSummary {
  lowestPrice: HourlyPrice;
  highestPrice: HourlyPrice;
}

export function getDailyPriceSummary(
  prices: HourlyPrice[]
): DailyPriceSummary | null {
  if (prices.length === 0) {
    return null;
  }

  const lowestPrice = prices.reduce((lowest, current) =>
    current.DKK_per_kWh < lowest.DKK_per_kWh ? current : lowest
  );

  const highestPrice = prices.reduce((highest, current) =>
    current.DKK_per_kWh > highest.DKK_per_kWh ? current : highest
  );

  return { lowestPrice, highestPrice };
}

export function getPriceColor(
  price: number,
  lowestPrice: number,
  highestPrice: number
): string {
  if (highestPrice === lowestPrice) {
    return 'rgb(255, 230, 0)';
  }

  const ratio = Math.max(
    0,
    Math.min(1, (price - lowestPrice) / (highestPrice - lowestPrice))
  );

  const stops = [
    { r: 0, g: 255, b: 41 },   // Bright green
    { r: 255, g: 255, b: 0 },  // Bright yellow
    { r: 255, g: 140, b: 0 },  // Bright orange
    { r: 255, g: 40, b: 40 },  // Bright red
  ];

  const position = ratio * (stops.length - 1);
  const index = Math.min(
    Math.floor(position),
    stops.length - 2
  );
  const blend = position - index;

  const start = stops[index];
  const end = stops[index + 1];

  const red = Math.round(start.r + (end.r - start.r) * blend);
  const green = Math.round(start.g + (end.g - start.g) * blend);
  const blue = Math.round(start.b + (end.b - start.b) * blend);

  return `rgb(${red}, ${green}, ${blue})`;
}
