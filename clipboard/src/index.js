import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero/Hero';
import Track from './components/Track/Track';
import Access from './components/Access/Access';
import Supercharge from './components/Supercharge/Supercharge';
import Ads from './components/Ads/Ads';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    {/* <App /> */}
    <Hero />
    <Track />
    <Access />
    <Supercharge />
    <Ads />
    <Footer />
  </div>
);

