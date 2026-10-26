// src/hooks/usePrices.ts
import { useEffect, useState } from "react";
import { fetchDailyPrices } from "../modules/prices/priceApi";
import type { HourlyPrice, PriceRegion } from "../modules/prices/price.types";

export function usePrices(date: Date, region: PriceRegion) {
    const [prices, setPrices] = useState<HourlyPrice[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let isActive = true;

        async function loadPrices() {
            setIsLoading(true);
            setError(null);

            try {
                const data = await fetchDailyPrices(date, region);

                if (isActive) {
                    setPrices(data);
                }
            } catch {
                if (isActive) {
                    setError(`Failed to load electricity prices.`);
                }
            } finally {
                if (isActive) {
                    setIsLoading(false);
                }
            }
        }

        loadPrices();

        return () => {
            isActive = false;
        };
    }, [date, region]);

    return { prices, isLoading, error };
}