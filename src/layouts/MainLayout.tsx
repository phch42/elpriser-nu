// src/layouts/MainLayout.tsx
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faXmark } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import DesktopDashboard from '../components/DesktopDashboard/DesktopDashboard';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import { useLowPriceAlarm } from '../hooks/useLowPriceAlarm';
import {
  Header,
  HeaderTop,
  SettingsButton,
  MainContent,
  PageLayout,
  ModalOverlay,
  SettingsModal,
  ModalCloseButton,
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

  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  useLowPriceAlarm();

  const isSettingsPage = location.pathname === '/settings';
  const showDashboard = isTabletOrDesktop && !isSettingsPage;

  useEffect(() => {
    if (!isSettingsModalOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsSettingsModalOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSettingsModalOpen]);

  function handleSettingsClick() {
    if (isTabletOrDesktop) {
      setIsSettingsModalOpen(true);
    } else {
      navigate('/settings');
    }
  }

  return (
    <PageLayout>
      <Header>
        <HeaderTop>
          <Navigation />

          <SettingsButton
            type="button"
            aria-label="Åbn indstillinger"
            onClick={handleSettingsClick}
          >
            <FontAwesomeIcon icon={faGear} />
          </SettingsButton>
        </HeaderTop>
      </Header>

      <MainContent>
        {showDashboard ? <DesktopDashboard /> : <Outlet />}
      </MainContent>

      <Footer />

      {isSettingsModalOpen && isTabletOrDesktop && (
        <ModalOverlay onClick={() => setIsSettingsModalOpen(false)}>
          <SettingsModal
            role="dialog"
            aria-modal="true"
            aria-label="Indstillinger"
            onClick={(event) => event.stopPropagation()}
          >
            <ModalCloseButton
              type="button"
              aria-label="Luk indstillinger"
              onClick={() => setIsSettingsModalOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </ModalCloseButton>

            <SettingsPage />
          </SettingsModal>
        </ModalOverlay>
      )}
    </PageLayout>
  );
}