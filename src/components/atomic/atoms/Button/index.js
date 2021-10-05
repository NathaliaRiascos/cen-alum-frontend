import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.css'

const Button = ({ type, children, positionIcon }) => 
  <button className={classNames('button', {
    [`type-${type}`]: type,
    [`position-icon-${positionIcon}`]: positionIcon
  })} >{ children }</button>

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'enlace', 'item']),
    positionIcon: PropTypes.oneOf(['left', 'right'])
}

Button.defaultProps = {
    type: 'primary',
    positionIcon: 'right'
}
export default Button;