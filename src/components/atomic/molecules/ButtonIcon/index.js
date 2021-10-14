import React from 'react';
import PropTypes from 'prop-types'
import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';


const ButtonIcon = ({ children, type, icon, positionIcon, onClick}) => (
  <Button className='center' type={type} positionIcon={positionIcon}  onClick={onClick}>
    <Icon type={icon} />
    {children}
  </Button>
)

ButtonIcon.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'enlace', 'item']),
  icon: PropTypes.string.isRequired,
  positionIcon: PropTypes.oneOf(['left', 'right']),
  onClick: PropTypes.func
}

ButtonIcon.defaultProps = { 
  type: 'secondary',
  positionIcon: 'left'
}
export default ButtonIcon
