import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const headline = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
        <div>
          { Planets.map(({ name, image }, index) => (
            <PlanetCard key={ index } planetName={ name } planetImage={ image } />
          )) }
        </div>
      </div>
    );
  }
}
