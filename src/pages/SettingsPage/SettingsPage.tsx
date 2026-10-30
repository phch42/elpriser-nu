// src/pages/SettingsPage/SettingsPage.tsx
import { useState } from 'react';
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

export default function SettingsPage() {
  const [includeVat, setIncludeVat] = useState(false);
  const [lowPriceAlarm, setLowPriceAlarm] = useState(true);

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
            aria-checked={includeVat}
            aria-label="Priser inkl. moms"
            onClick={() => setIncludeVat((current) => !current)}
          >
            <ToggleTrack $enabled={includeVat} />
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
            aria-checked={lowPriceAlarm}
            aria-label="Laveste pris alarm"
            onClick={() => setLowPriceAlarm((current) => !current)}
          >
            <ToggleTrack $enabled={lowPriceAlarm} />
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