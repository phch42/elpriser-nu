// src/components/Navigation/Navigation.tsx
import {
  NavigationContainer,
  NavigationLink,
  NavigationLinks,
} from './Navigation.styled';

const navigationItems = [
  { label: 'Oversigt', to: '/' },
  { label: 'Lige nu', to: '/current' },
  { label: 'Historik', to: '/history' },
] as const;

export default function Navigation() {
  return (
    <NavigationContainer aria-label="Hovednavigation">
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