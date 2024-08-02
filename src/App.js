import React from 'react';
import ContainerNavBar from './containers/NavBar/ContainerNavBar';
import ContainerHeader from './containers/Header/ContainerHeader';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ContainerNavBar />
      <ContainerHeader />
      <Main />
      <Footer />
    </>
  );
}

export default App;
