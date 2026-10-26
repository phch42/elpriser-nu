
import { useState } from 'react';
import Navigation, {
  type NavigationSection,
} from '../components/Navigation/Navigation';
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
        <h2>{activeSection}</h2>
      </MainContent>
    </PageLayout>
  );
}
