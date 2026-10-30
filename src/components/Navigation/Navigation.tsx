// src/components/Navigation/Navigation.tsx
import {
  NavigationContainer,
  NavigationBrandLink,
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
      <NavigationBrandLink to="/" aria-label="Gå til forsiden">
        <NavigationBrand>
          <NavigationLogo
            src="/src/assets/appIcons/mainIcon.svg"
            alt="ELPrisen.nu"
          />
          <NavigationTitle>ELPrisen.nu</NavigationTitle>
        </NavigationBrand>
      </NavigationBrandLink>

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