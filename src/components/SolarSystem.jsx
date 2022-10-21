import React, { Component } from 'react';
import Title from './Title';

export default class SolarSystem extends Component {
  render() {
    const headline = 'Planetas';
    return (
      <div data-testid="solar-system">
        <Title headline={ headline } />
      </div>
    );
  }
}
