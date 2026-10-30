// src/hooks/usePrices.ts
import { useEffect, useState } from 'react';
import { fetchDailyPrices } from '../modules/prices/priceApi';
import type { HourlyPrice, PriceRegion } from '../modules/prices/price.types';
import { useSettings } from '../context/SettingsContext';

export function usePrices(date: Date, region: PriceRegion) {
  const { settings } = useSettings();

  const [prices, setPrices] = useState<HourlyPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    async function loadPrices() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchDailyPrices(date, region);

        if (isActive) {
          const adjustedPrices = data.map((price) => ({
            ...price,
            DKK_per_kWh: settings.includeVat
              ? price.DKK_per_kWh * 1.25
              : price.DKK_per_kWh,
          }));

          setPrices(adjustedPrices);
        }
      } catch {
        if (isActive) {
          setError('Failed to load electricity prices.');
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
  }, [date, region, settings.includeVat]);

  return { prices, isLoading, error };
}