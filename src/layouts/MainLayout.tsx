// src/layouts/MainLayout.tsx
import { Outlet, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation/Navigation';
import {
  Header,
  HeaderTop,
  SettingsButton,
  MainContent,
  PageLayout,
} from './MainLayout.styled';
import { NavigationLogo } from '../components/Navigation/Navigation.styled';
import mainIcon from '../assets/appIcons/mainIcon.svg';

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Header>
        <HeaderTop>
          <NavigationLogo src={mainIcon} alt="ElPriser.nu" />
          <Navigation />
        </HeaderTop>

        <SettingsButton
          type="button"
          aria-label="Åbn indstillinger"
          onClick={() => navigate('/settings')}
        >
          <FontAwesomeIcon icon={faGear} />
        </SettingsButton>
      </Header>

      <MainContent>
        <Outlet />
      </MainContent>
    </PageLayout>
  );
}