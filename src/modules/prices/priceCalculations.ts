// src/modules/prices/priceCalculations.ts
import type { HourlyPrice } from "./price.types";

export interface DailyPriceSummary {
    lowestPrice: HourlyPrice;
    highestPrice: HourlyPrice;
}

export function getDailyPriceSummary(prices: HourlyPrice[]): DailyPriceSummary | null {
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
        return 'rgb(128, 128, 0)';
    }

    const ratio = (price - lowestPrice) / (highestPrice - lowestPrice);

    const red = Math.round(255 * ratio);
    const green = Math.round(255 * (1 - ratio));

    return `rgb(${red}, ${green}, 0)`;
}