import { Routes, Route } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import OverviewPage from '../pages/OverviewPage';
import CurrentPricePage from '../pages/CurrentPricePage/CurrentPricePage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<OverviewPage />} />
        <Route path="current" element={<CurrentPricePage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route
          path="settings"
          element={
            <section>
              <h2>Indstillinger</h2>
            </section>
          }
        />
      </Route>
    </Routes>
  );
}