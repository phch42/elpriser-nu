// src/App.tsx
import { BrowserRouter } from 'react-router';
import AppRouter from './router/router';
import { SettingsProvider } from './context/SettingsContext';

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </SettingsProvider>
  );
}