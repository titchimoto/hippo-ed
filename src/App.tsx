import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import TopicCloud from './components/TopicCloud/TopicCloud';
import MainNav from './components/MainNav/MainNav';
import Header from './components/Header/Header';
import Section1 from './components/Section/Section1';
import Section2 from './components/Section/Section2';
import Section3 from './components/Section/Section3';
import Section4 from './components/Section/Section4';

import './App.scss';

function App() {

  return (
    <div className="homepage">
      {/* In a production app this would live higher up in the component
      tree to persist across multiple pages, but for this demo, I've left it here */}
      <MainNav /> 
      <Header />
      <div className="page-content">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />

        <div className="section__column content__padded">
          <h2 className="section__header content__push-right">
            See (and Hear) the Hippo Difference for Yourself
          </h2>
        </div>
        <ImageGrid />
        <TopicCloud />
      </div>
    </div>
  );
}

export default App;
