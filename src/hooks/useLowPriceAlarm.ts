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

        const notificationKey = [
            'elprisen-lowest-price',
            settings.region,
            cheapestPrice.time_start,
        ].join('-');

        if (localStorage.getItem(notificationKey)) {
            return;
        }

        // Mark this period before showing the notification
        // to prevent duplicate notifications.
        localStorage.setItem(notificationKey, 'shown');

        const title = 'Laveste elpris nu';
        const body = `Elprisen er ${cheapestPrice.DKK_per_kWh.toFixed(3)} kr./kWh.`;

        async function showNotification() {
            try {
                if ('serviceWorker' in navigator) {
                    const registration = await navigator.serviceWorker.ready;

                    await registration.showNotification(title, {
                        body,
                        tag: notificationKey,
                        icon: '/icons/android-launchericon-192-192.png',
                    });
                } else {
                    new Notification(title, { body });
                }
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