// src/layouts/MainLayout.tsx
import Navigation from '../components/Navigation/Navigation';
import { Header, MainContent, PageLayout } from './MainLayout.styled';

export default function MainLayout() {
  return (
    <PageLayout>
      <Header>
        <h1>ElPriser.nu</h1>
        <Navigation />
      </Header>

      <MainContent>
        
      </MainContent>
    </PageLayout>
  );
}