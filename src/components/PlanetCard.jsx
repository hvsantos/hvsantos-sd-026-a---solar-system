import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string,
  planetName: PropTypes.string,
}.isRequired;
