// src/layouts/MainLayout.tsx
import { Outlet, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import {
  Header,
  HeaderTop,
  SettingsButton,
  MainContent,
  PageLayout,
} from './MainLayout.styled';

export default function MainLayout() {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Header>
        <HeaderTop>
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

      <Footer />
    </PageLayout>
  );
}