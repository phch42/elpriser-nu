// src/pages/OverviewPage.tsx
import { useMemo } from 'react';
import PriceSummary from '../components/PriceSummary/PriceSummary';
import HourlyPrices from '../components/HourlyPrices/HourlyPrices';
import { usePrices } from '../hooks/usePrices';
import { useSettings } from '../context/SettingsContext';
import { OverviewHeading } from './OverviewPage.styled';

export default function OverviewPage() {
    const { settings } = useSettings();
    const region = settings.region;

    const today = useMemo(() => new Date(), []);

    const { prices, isLoading, error } = usePrices(today, region);

    return (
        <section>
            <OverviewHeading>Oversigt</OverviewHeading>

            {!region ? (
                <p>Vælg venligst en region under indstillinger.</p>
            ) : (
                <>
                    {isLoading && <p>Henter elpriser...</p>}
                    {error && <p>{error}</p>}

                    {!isLoading && !error && (
                        <>
                            <PriceSummary prices={prices} />
                            <HourlyPrices prices={prices} />
                        </>
                    )}
                </>
            )}
        </section>
    );
}