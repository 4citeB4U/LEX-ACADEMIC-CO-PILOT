
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './contexts/AppContext';
import { VoiceControlProvider } from './contexts/VoiceControlContext';
import './services/cueRuntime';
import { seedDatabase } from './services/db';

const isDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

if (!isDev) { // Production environment
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
} else { // Development environment
  seedDatabase(); // Seed in dev mode if DB is empty
  // The automatic SW unregistration on every load has been removed to prevent race conditions
  // with dev servers and the '?fresh' reset logic. Use the '?fresh' URL parameter for a hard reset.
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppProvider>
      <VoiceControlProvider>
        <App />
      </VoiceControlProvider>
    </AppProvider>
  </React.StrictMode>
);
