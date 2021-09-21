import React from 'react';
import { mapIcon } from './IconList';

const Icon = ({ type }) => (
  <div>
    <img src={mapIcon(type)} />
  </div>
)

export default Icon