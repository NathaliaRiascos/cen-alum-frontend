import React from 'react'

import Button from 'components/atomic/atoms/Button'
import style from './Item.module.css'

const Item = ({ children, onClick }) => (
  <li className={style.li}>
    <Button type='item' onClick={onClick}>
      { children }
    </Button>
  </li>
)

export default Item