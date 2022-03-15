import React from 'react';
import Content from './Content';
import Footer from './Footer';
import FreePlanAndroid from './FreePlanAndroid';
import Header from './Header';
import Question from './Question';
import './styles.scss';
const Home = () => {
  return (
    <>
      <div className="homepage">
        <Header />
        <Content />
      </div>
      <FreePlanAndroid />
      <Question />
      <Footer />
    </>
  );
};

export default Home;
