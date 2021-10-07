import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atomic/atoms/Button'
import style from './Item.module.css'

const Item = ({ children, onClick }) => (
  <li className={style.li}>
    <Button type='item' onClick={onClick}>
      { children }
    </Button>
  </li>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default Item