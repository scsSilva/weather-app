import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ContextProvider } from './src/shared/context';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </>
  );
}