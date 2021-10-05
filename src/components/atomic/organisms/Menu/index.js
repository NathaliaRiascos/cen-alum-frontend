import React from 'react'
import { Link } from 'wouter';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Item from 'components/atomic/molecules/Item'

const Menu = () => (
  <nav>
    <ul>
      <Item>
        <Link href='/crear-cotizacion/'>
          Soy item
        </Link>
        <ExpandMore />
      </Item>
    </ul>
  </nav>
)

export default Menu