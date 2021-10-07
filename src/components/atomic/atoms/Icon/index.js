import React from 'react';
//import { ReactSVG } from 'react-svg' <ReactSVG src={mapIcon(type)} /><img src={`assets${mapIcon(type)}`} />
import { mapIcon } from './IconList';

const Icon = ({ type }) => (
  <div>
    {mapIcon(type)}
  </div>
)

export default Icon