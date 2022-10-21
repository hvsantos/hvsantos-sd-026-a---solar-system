import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    const headline = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
        { missions.map(({ name, year, country, destination }, index) => (
          <MissionCard
            key={ `m${index}` }
            year={ year }
            name={ name }
            country={ country }
            destination={ destination }
          />
        )) }
      </div>
    );
  }
}
