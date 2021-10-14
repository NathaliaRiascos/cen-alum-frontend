import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atomic/atoms/Button'
import style from './Item.module.css'

const Item = ({ children, onClick, design }) => (
  <li className={style.li} style={design}>
    <Button type='item' onClick={onClick} >
      { children }
    </Button>
  </li>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  design: PropTypes.object
}

export default Item