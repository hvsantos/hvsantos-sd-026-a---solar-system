import React, { Component } from 'react';
import Title from './Title';

export default class Missions extends Component {
  render() {
    const headline = 'Missões';
    return (
      <div data-testid="missions">
        <Title headline={ headline } />
      </div>
    );
  }
}
