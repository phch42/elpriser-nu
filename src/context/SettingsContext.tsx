// src/context/SettingsContext.tsx

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from 'react';
import type { PriceRegion } from '../modules/prices/price.types';

interface AppSettings {
    includeVat: boolean;
    lowPriceAlarm: boolean;
    region: PriceRegion;
}

interface SettingsContextValue {
    settings: AppSettings;
    setIncludeVat: (value: boolean) => void;
    setLowPriceAlarm: (value: boolean) => void;
    setRegion: (value: PriceRegion) => void;
}

const SETTINGS_KEY = 'elprisen-settings';

const defaultSettings: AppSettings = {
    includeVat: false,
    lowPriceAlarm: true,
    region: 'DK1',
};

const SettingsContext = createContext<SettingsContextValue | undefined>(
    undefined
);

function loadSettings(): AppSettings {
    try {
        const savedSettings = localStorage.getItem(SETTINGS_KEY);

        if (savedSettings) {
            const parsed = JSON.parse(savedSettings);

            return {
                includeVat: parsed.includeVat ?? defaultSettings.includeVat,
                lowPriceAlarm: parsed.lowPriceAlarm ?? defaultSettings.lowPriceAlarm,
                region: parsed.region === 'DK2' ? 'DK2' : 'DK1',
            };
        }
    } catch {
        console.warn('Could not load saved settings.');
    }

    return defaultSettings;
}

interface SettingsProviderProps {
    children: ReactNode;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
    const [settings, setSettings] = useState<AppSettings>(loadSettings);

    useEffect(() => {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    }, [settings]);

    function setIncludeVat(value: boolean) {
        setSettings((current) => ({ ...current, includeVat: value }));
    }

    function setLowPriceAlarm(value: boolean) {
        setSettings((current) => ({ ...current, lowPriceAlarm: value }));
    }

    function setRegion(value: PriceRegion) {
        setSettings((current) => ({ ...current, region: value }));
    }

    return (
        <SettingsContext.Provider
            value={{
                settings,
                setIncludeVat,
                setLowPriceAlarm,
                setRegion,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);

    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider.');
    }

    return context;
}