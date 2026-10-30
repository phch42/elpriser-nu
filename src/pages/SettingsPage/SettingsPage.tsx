// src/pages/SettingsPage/SettingsPage.tsx

import { useSettings } from '../../context/SettingsContext';
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
  const {
    settings,
    setIncludeVat,
    setLowPriceAlarm,
    setRegion,
  } = useSettings();

  async function handleAlarmToggle() {
    if (settings.lowPriceAlarm) {
      setLowPriceAlarm(false);
      return;
    }

    if (!('Notification' in window)) {
      alert('Din browser understøtter ikke notifikationer.');
      return;
    }

    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      setLowPriceAlarm(true);
    } else {
      alert(
        'Du skal tillade notifikationer for at aktivere alarmen.'
      );
    }
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
            onClick={() => setIncludeVat(!settings.includeVat)}
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
            onClick={handleAlarmToggle}
          >
            <ToggleTrack $enabled={settings.lowPriceAlarm} />
          </ToggleButton>
        </SettingRow>

        <SettingRow>
          <SettingLabel htmlFor="price-region">
            Vælg region
          </SettingLabel>

          <RegionSelect
            id="price-region"
            value={settings.region}
            onChange={(event) =>
              setRegion(event.target.value as 'DK1' | 'DK2')
            }
          >
            <option value="DK2">Region Øst</option>
            <option value="DK1">Region Vest</option>
          </RegionSelect>
        </SettingRow>
      </SettingsOptions>
    </SettingsContent>
  );
}