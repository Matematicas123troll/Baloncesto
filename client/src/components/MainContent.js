import React from 'react';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
// import './MainContent.css';

const MainContent = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
};

export default MainContent;