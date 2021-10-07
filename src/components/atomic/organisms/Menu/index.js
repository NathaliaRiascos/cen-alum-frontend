import React from 'react'
import {  menu, link } from './Menu.module.css'
import { Link } from 'wouter';
import Items from 'helpers/listItem'

import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

import Item from 'components/atomic/molecules/Item'

const Menu = () => {
  const [open, setOpen] = React.useState({
    id: false
  });

 const handleClick = listItem => {
    setOpen({
      ...open,
      [listItem.id]: !open[listItem.id]
    });
  }
  
  return (
    <nav className={menu}>
      <ul>
        { 
          Items.map(item => (
            <div key={item.id}>
              { !item.page?
                <>
                  <Item 
                    key={item.id}
                    onClick={() => handleClick(item)}
                    >
                    {item.text}
                    {item.submenu ? (open[item.id] ? <ExpandLess />: <ExpandMore />) : null}
                  </Item>
                  {item.submenu ? (
                    <Collapse in={open[item.id]} timeout='auto' unmountOnExit>
                      {item.submenu.map(subitem => (
                        <Item
                          key={subitem.id} 
                        ><Link href={subitem.page} className={link}>{subitem.text}</Link></Item>
                      ))}
                    </Collapse>
                  ): null }
                </>
                : <Item
                    key={item.id}
                  ><Link href={item.page} className={link}>{item.text}</Link></Item>
              }
            </div>
          ))       
        }
      </ul>
    </nav>
  )
}

export default Menu