// src/layouts/MainLayout.tsx
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import DesktopDashboard from '../components/DesktopDashboard/DesktopDashboard';
import { useLowPriceAlarm } from '../hooks/useLowPriceAlarm';
import {
  Header,
  HeaderTop,
  SettingsButton,
  MainContent,
  PageLayout,
} from './MainLayout.styled';

function useTabletOrDesktop() {
  const [isTabletOrDesktop, setIsTabletOrDesktop] = useState(
    () => window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    function handleChange(event: MediaQueryListEvent) {
      setIsTabletOrDesktop(event.matches);
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return isTabletOrDesktop;
}

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isTabletOrDesktop = useTabletOrDesktop();

  useLowPriceAlarm();

  const isSettingsPage = location.pathname === '/settings';
  const showDashboard = isTabletOrDesktop && !isSettingsPage;

  return (
    <PageLayout>
      <Header>
        <HeaderTop>
          <Navigation />

          <SettingsButton
            type="button"
            aria-label="Åbn indstillinger"
            onClick={() => navigate('/settings')}
          >
            <FontAwesomeIcon icon={faGear} />
          </SettingsButton>
        </HeaderTop>
      </Header>

      <MainContent>
        {showDashboard ? <DesktopDashboard /> : <Outlet />}
      </MainContent>

      <Footer />
    </PageLayout>
  );
}