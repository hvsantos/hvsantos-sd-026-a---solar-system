import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const headline = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
        <div>
          { planets.map(({ name, image }, index) => (
            <PlanetCard key={ `p${index}` } planetName={ name } planetImage={ image } />
          )) }
        </div>
      </div>
    );
  }
}
