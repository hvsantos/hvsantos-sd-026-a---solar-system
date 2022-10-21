import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const headline = 'Ganhamo';
    return (
      <div>
        <Header />
        <p>Sistema Solar</p>
        <SolarSystem />
        <Title headline={ headline } />
      </div>
    );
  }
}

export default App;
