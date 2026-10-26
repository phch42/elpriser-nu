// src/modules/prices/priceApi.ts
import type { HourlyPrice, PriceRegion } from "./price.types";

export async function fetchDailyPrices(date: Date, region: PriceRegion): Promise<HourlyPrice[]> {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const url = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${region}.json`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch electricity prices: ${response.status}`);
    }

    return response.json() as Promise<HourlyPrice[]>;
}