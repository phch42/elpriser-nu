
import { NavigationContainer, NavigationLink } from './Navigation.styled';

const navigationItems = [
  'Oversigt',
  'Lige nu',
  'Historik',
  'Indstillinger',
];

export default function Navigation() {
  return (
    <NavigationContainer aria-label="Hovednavigation">
      {navigationItems.map((item) => (
        <NavigationLink key={item} type="button">
          {item}
        </NavigationLink>
      ))}
    </NavigationContainer>
  );
}
