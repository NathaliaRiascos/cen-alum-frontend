import React from 'react';
import PropTypes from 'prop-types'
import Button from 'components/atomic/atoms/Button';
import Icon from 'components/atomic/atoms/Icon';

const ButtonIcon = ({ children }) => (
  <Button type='secundary'>
    {children}
    <Icon type='btn-view' />
  </Button>
)

ButtonIcon.protoTypes = {
    children: PropTypes.node.isRequired
}

export default ButtonIcon

