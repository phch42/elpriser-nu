// src/components/Footer/Footer.tsx
import {
  FooterContainer,
  FooterText,
  Highlight,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Priserne er <Highlight>ex. moms</Highlight> og afgifter
      </FooterText>

      <FooterText>
        Du vises lige nu priserne for <Highlight>Øst Danmark</Highlight>
      </FooterText>
    </FooterContainer>
  );
}