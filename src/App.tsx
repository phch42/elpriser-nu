// src/App.tsx
import { BrowserRouter } from 'react-router';
import AppRouter from './router/router';

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}