import React from 'react'
//import Button from 'components/atomic/atoms/Button'
import style from './Item.module.css'

const Item = ({ children }) => (
  <li className={style.li}>
    { children }
  </li>
)

export default Item