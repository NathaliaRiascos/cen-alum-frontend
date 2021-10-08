import React from 'react'
import { menu, link } from './Menu.module.css'
import { Link } from 'wouter';
import Items from 'helpers/listItem'

import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@material-ui/core/Collapse';

import Item from 'components/atomic/molecules/Item'

import { choices } from '../../../tokens'
const { lightBlue, mediumblackBlue } = choices.colors.brand;

const Menu = () => {
  const [open, setOpen] = React.useState({
    id: false
  });
  const [selectedItem, setSelectedItem] = React.useState({
    id: false
  });
  const [selectedSubItem, setSelectedSubItem] = React.useState({
    id: false
  });

  const selectItem = itemId => {
    setSelectedItem({
      [itemId]: !selectedItem[itemId]
    });
  }
  const selectSubItem = subItemId => {
    setSelectedSubItem({
      [subItemId]: !selectedSubItem[subItemId]
    });
  }
  const handleClick = listItem => {
    setOpen({
      [listItem.id]: !open[listItem.id]
    });
    selectItem(listItem.id);
  }

  const styleForSelectedItem = item => (selectedItem[item.id] ? { borderLeft: `4px solid ${lightBlue}` } : null);
  const styleForSelectSubItem = subItem => (selectedSubItem[subItem.id] ? { background: `${mediumblackBlue}` } : null);
  return (
    <nav className={menu}>
      <ul>
        {
          Items.map(item => (
            <div key={item.id} >
              {!item.page ?
                <>
                  <Item
                    key={item.id}
                    onClick={() => handleClick(item)}
                    design={styleForSelectedItem(item)}
                  >
                    {item.text}
                    {item.submenu ? (open[item.id] ? <ExpandLess /> : <ExpandMore />) : null}
                  </Item>
                  {item.submenu ? (
                    <Collapse in={open[item.id]} timeout='auto' unmountOnExit>
                      {item.submenu.map(subitem => (
                        <Item
                          key={subitem.id}
                          design={styleForSelectSubItem(subitem)}
                        ><Link href={subitem.page}
                          onClick={() => selectSubItem(subitem.id)}
                          className={link}>{subitem.text}</Link></Item>
                      ))}
                    </Collapse>
                  ) : null}
                </>
                : <Item
                  key={item.id}
                  onClick={() => handleClick(item)}
                  design={styleForSelectedItem(item)}
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