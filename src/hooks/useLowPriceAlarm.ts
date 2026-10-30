// src/hooks/useLowPriceAlarm.ts
import { useEffect, useMemo, useState } from 'react';
import { usePrices } from './usePrices';
import { useSettings } from '../context/SettingsContext';

export function useLowPriceAlarm() {
    const { settings } = useSettings();
    const today = useMemo(() => new Date(), []);
    const [now, setNow] = useState(() => new Date());

    const { prices } = usePrices(today, settings.region);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setNow(new Date());
        }, 30_000);

        return () => window.clearInterval(interval);
    }, []);

    const upcomingPrices = prices.filter(
        (price) => new Date(price.time_end) > now
    );

    const cheapestPrice =
        upcomingPrices.length > 0
            ? upcomingPrices.reduce((cheapest, current) =>
                  current.DKK_per_kWh < cheapest.DKK_per_kWh
                      ? current
                      : cheapest
              )
            : null;

    const isCheapestPriceActive =
        cheapestPrice !== null &&
        now >= new Date(cheapestPrice.time_start) &&
        now < new Date(cheapestPrice.time_end);

    const shouldNotify =
        settings.lowPriceAlarm && isCheapestPriceActive;

    useEffect(() => {
        if (!shouldNotify || !cheapestPrice) {
            return;
        }

        const priceToNotify = cheapestPrice;

        const notificationKey = [
            'elprisen-lowest-price',
            settings.region,
            priceToNotify.time_start,
        ].join('-');

        if (localStorage.getItem(notificationKey)) {
            return;
        }

        localStorage.setItem(notificationKey, 'shown');

        async function showNotification() {
            try {
                const registration = await navigator.serviceWorker.ready;

                await registration.showNotification('Laveste elpris nu', {
                    body: `Elprisen er ${priceToNotify.DKK_per_kWh.toFixed(3)} kr./kWh.`,
                    tag: notificationKey,
                    icon: '/icons/android-launchericon-192-192.png',
                });
            } catch (error) {
                console.error('Could not show price notification:', error);
            }
        }

        showNotification();
    }, [shouldNotify, cheapestPrice, settings.region]);

    return {
        cheapestPrice,
        shouldNotify,
    };
}