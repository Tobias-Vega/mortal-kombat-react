import React from 'react';
import './App.css'
import Header from './components/Header';
import HistorySection from './components/History-section';
import CharactersSection from './components/CharacterSection';
import StagesSection from './components/StageSection';

const App: React.FC = () => {
  return (
    <>
  <Header />
  <div className="pt-16">
    <HistorySection />
    <CharactersSection />
    <StagesSection />
  </div>
  </>
  );
};

export default App;
