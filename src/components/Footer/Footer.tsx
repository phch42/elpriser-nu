// src/components/Footer/Footer.tsx
import { useSettings } from '../../context/SettingsContext';
import {
  FooterContainer,
  FooterText,
  Highlight,
} from './Footer.styled';

export default function Footer() {
  const { settings } = useSettings();

  const regionName =
    settings.region === 'DK2' ? 'Øst Danmark' : 'Vest Danmark';

  const vatStatus = settings.includeVat ? 'inkl. moms' : 'ex. moms';

  return (
    <FooterContainer>
      <FooterText>
        Priserne er <Highlight>{vatStatus}</Highlight> og afgifter
      </FooterText>

      <FooterText>
        Du vises lige nu priserne for <Highlight>{regionName}</Highlight>
      </FooterText>
    </FooterContainer>
  );
}