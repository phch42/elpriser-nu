// src/layouts/MainLayout.tsx

import { useState } from 'react';
import Navigation, {
  type NavigationSection,
} from '../components/Navigation/Navigation';
import OverviewPage from '../pages/OverviewPage';
import { Header, MainContent, PageLayout } from './MainLayout.styled';

export default function MainLayout() {
  const [activeSection, setActiveSection] =
    useState<NavigationSection>('Oversigt');

  return (
    <PageLayout>
      <Header>
        <h1>ElPriser.nu</h1>
        <Navigation
          activeSection={activeSection}
          onNavigate={setActiveSection}
        />
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