import React from 'react';
import './green-theme.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner';
import Features from './components/Features';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FeaturesList from './components/FeaturesList';
import LogoArea from './components/LogoArea';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Features />
      <Services />
      <Stats />
      <Testimonials />
      <FeaturesList />
      <LogoArea />
      <News />
      <Footer />
    </div>
  );
}

export default App;