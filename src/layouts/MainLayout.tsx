import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Navigation, {
  type NavigationSection,
} from '../components/Navigation/Navigation';
import OverviewPage from '../pages/OverviewPage';
import {
  Header,
  HeaderTop,
  Logo,
  SettingsButton,
  MainContent,
} from './MainLayout.styled';
import { PageLayout } from './MainLayout.styled';

export default function MainLayout() {
  const [activeSection, setActiveSection] =
    useState<NavigationSection>('Oversigt');

  return (
    <PageLayout>
      <Header>
        <HeaderTop>
          <Logo>ElPriser.nu</Logo>
        </HeaderTop>

        <Navigation
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />

        <SettingsButton
          type="button"
          aria-label="Åbn indstillinger"
          onClick={() => setActiveSection('Indstillinger')}
        >
          <FontAwesomeIcon icon={faGear} />
        </SettingsButton>
      </Header>

      <MainContent>
        {activeSection === 'Oversigt' && <OverviewPage />}

        {activeSection === 'Lige nu' && (
          <section>
            <h2>Lige nu</h2>
          </section>
        )}

        {activeSection === 'Historik' && (
          <section>
            <h2>Historik</h2>
          </section>
        )}

        {activeSection === 'Indstillinger' && (
          <section>
            <h2>Indstillinger</h2>
          </section>
        )}
      </MainContent>
    </PageLayout>
  );
}