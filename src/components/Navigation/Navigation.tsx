import {
  NavigationContainer,
  NavigationLink,
  NavigationLogo,
} from './Navigation.styled';

const navigationItems = [
  'Oversigt',
  'Lige nu',
  'Historik',
] as const;

export type NavigationSection =
  | (typeof navigationItems)[number]
  | 'Indstillinger';

interface NavigationProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
  logo: string;
}

export default function Navigation({
  activeSection,
  onNavigate,
  logo,
}: NavigationProps) {
  return (
    <NavigationContainer aria-label="Hovednavigation">
      <NavigationLogo src={logo} alt="ElPriser.nu" />

      {navigationItems.map((item) => (
        <NavigationLink
          key={item}
          type="button"
          $active={activeSection === item}
          aria-current={activeSection === item ? 'page' : undefined}
          onClick={() => onNavigate(item)}
        >
          {item}
        </NavigationLink>
      ))}
    </NavigationContainer>
  );
}