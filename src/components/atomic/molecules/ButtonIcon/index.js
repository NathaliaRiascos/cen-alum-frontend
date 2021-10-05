import React from 'react';
import PropTypes from 'prop-types'
import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';


const ButtonIcon = ({ children, type, icon, positionIcon }) => (
  <Button type={type} positionIcon={positionIcon}>
    <Icon type={icon} />
    {children}
  </Button>
)

ButtonIcon.protoTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  icon: PropTypes.string.isRequired
}

ButtonIcon.defaultProps = { 
  type: 'secondary',
  positionIcon: 'right'
}
export default ButtonIcon
