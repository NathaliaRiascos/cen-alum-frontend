import React from 'react';
import PropTypes from 'prop-types'
//import { ReactSVG } from 'react-svg' <ReactSVG src={mapIcon(type)} /><img src={`assets${mapIcon(type)}`} />
import { mapIcon } from './IconList';

const Icon = ({ type }) => (
  <>
    {mapIcon(type)}
  </>
)

Icon.propTypes = {
  type: PropTypes.string
}

export default Icon