// src/components/Navigation/Navigation.tsx
import {
  NavigationContainer,
  NavigationLink,
} from './Navigation.styled';

const navigationItems = [
  'Oversigt',
  'Lige nu',
  'Historik',
  'Indstillinger',
] as const;

export type NavigationSection = (typeof navigationItems)[number];

interface NavigationProps {
  activeSection: NavigationSection;
  onNavigate: (section: NavigationSection) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  return (
    <NavigationContainer aria-label="Hovednavigation">
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
