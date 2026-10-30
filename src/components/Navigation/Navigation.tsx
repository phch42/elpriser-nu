// src/components/Navigation/Navigation.tsx
import {
  NavigationContainer,
  NavigationBrand,
  NavigationLogo,
  NavigationTitle,
  NavigationLinks,
  NavigationLink,
} from './Navigation.styled';

const navigationItems = [
  { label: 'Oversigt', to: '/' },
  { label: 'Lige nu', to: '/current' },
  { label: 'Historik', to: '/history' },
] as const;

export default function Navigation() {
  return (
    <NavigationContainer aria-label="Hovednavigation">
      <NavigationBrand>
        <NavigationLogo
          src="/src/assets/appIcons/mainIcon.svg"
          alt="ELPrisen.nu"
        />
        <NavigationTitle>ELPrisen.nu</NavigationTitle>
      </NavigationBrand>

      <NavigationLinks>
        {navigationItems.map((item) => (
          <NavigationLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
          >
            {item.label}
          </NavigationLink>
        ))}
      </NavigationLinks>
    </NavigationContainer>
  );
}