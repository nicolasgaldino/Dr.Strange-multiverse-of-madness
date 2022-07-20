import React from 'react';
import { MainContent } from './components/MainContent';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  )
}
