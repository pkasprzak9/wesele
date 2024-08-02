import React from 'react';
import ContainerNavBar from './containers/NavBar/ContainerNavBar';
import ContainerHeader from './containers/Header/ContainerHeader';
import Main from './components/Main/Main';

function App() {
  return (
    <>
      <ContainerNavBar />
      <ContainerHeader />
      <Main />
    </>
  );
}

export default App;
