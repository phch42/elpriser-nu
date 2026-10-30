// src/pages/SettingsPage/SettingsPage.tsx
import {
  SettingsContent,
  SettingsHeading,
  SettingsOptions,
  SettingRow,
  SettingLabel,
  ToggleButton,
  ToggleTrack,
  RegionSelect,
} from './SettingsPage.styled';

export default function SettingsPage() {
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
            aria-label="Priser inkl. moms"
            aria-pressed={false}
          >
            <ToggleTrack $enabled={false} />
          </ToggleButton>
        </SettingRow>

        <SettingRow>
          <SettingLabel htmlFor="low-price-alarm">
            Laveste pris alarm
          </SettingLabel>

          <ToggleButton
            id="low-price-alarm"
            type="button"
            aria-label="Laveste pris alarm"
            aria-pressed={true}
          >
            <ToggleTrack $enabled={true} />
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