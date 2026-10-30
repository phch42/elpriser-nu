// src/pages/SettingsPage/SettingsPage.tsx
import { useEffect, useState } from 'react';
import {
  SettingsHeading,
  SettingsContent,
  SettingsOptions,
  SettingRow,
  SettingLabel,
  ToggleButton,
  ToggleTrack,
  RegionSelect,
} from './SettingsPage.styled';

interface SavedSettings {
  includeVat: boolean;
  lowPriceAlarm: boolean;
}

const SETTINGS_KEY = 'elprisen-settings';

function loadSettings(): SavedSettings {
  try {
    const savedSettings = localStorage.getItem(SETTINGS_KEY);

    if (savedSettings) {
      return {
        includeVat: JSON.parse(savedSettings).includeVat ?? false,
        lowPriceAlarm: JSON.parse(savedSettings).lowPriceAlarm ?? true,
      };
    }
  } catch {
    console.warn('Could not load saved settings.');
  }

  return {
    includeVat: false,
    lowPriceAlarm: true,
  };
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<SavedSettings>(loadSettings);

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  function toggleSetting(setting: keyof SavedSettings) {
    setSettings((current) => ({
      ...current,
      [setting]: !current[setting],
    }));
  }

  return (
    <SettingsContent>
      <SettingsHeading>Indstillinger</SettingsHeading>

      <SettingsOptions>
        <SettingRow>
          <SettingLabel htmlFor="include-vat">
            Priser inkl. moms
          </SettingLabel>

          <ToggleButton
            id="include-vat"
            type="button"
            role="switch"
            aria-checked={settings.includeVat}
            aria-label="Priser inkl. moms"
            onClick={() => toggleSetting('includeVat')}
          >
            <ToggleTrack $enabled={settings.includeVat} />
          </ToggleButton>
        </SettingRow>

        <SettingRow>
          <SettingLabel htmlFor="low-price-alarm">
            Laveste pris alarm
          </SettingLabel>

          <ToggleButton
            id="low-price-alarm"
            type="button"
            role="switch"
            aria-checked={settings.lowPriceAlarm}
            aria-label="Laveste pris alarm"
            onClick={() => toggleSetting('lowPriceAlarm')}
          >
            <ToggleTrack $enabled={settings.lowPriceAlarm} />
          </ToggleButton>
        </SettingRow>

        <SettingRow>
          <SettingLabel htmlFor="price-region">
            Vælg region
          </SettingLabel>

          <RegionSelect id="price-region" defaultValue="DK1">
            <option value="DK2">Region Øst</option>
            <option value="DK1">Region Vest</option>
          </RegionSelect>
        </SettingRow>
      </SettingsOptions>
    </SettingsContent>
  );
}