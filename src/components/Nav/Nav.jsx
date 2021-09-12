import React, { useState } from 'react'
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@material-ui/core'

import { InboxIcon } from '@material-ui/icons/InboxIcon';
import { MailIcon } from '@material-ui/icons/MailIcon';
import { MenuIcon } from '@material-ui/icons/MenuIcon';



export const Nav = (props) => {
  const { window } = props
//   const [mobileOpen, setMobileOpen] = useState(false)

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

  const drawer = (
    <div>
      <Divider />
      <List>
        {['Популярное', 'Свежее', 'Сообщения', 'Подписки'].map((text, index) => (
          <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
      <Drawer
        container={container}
        // className={classes.drawer}
        variant="temporary"
        anchor={'left'}
        open={true}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        classes={{
          // paper: classes.drawerPaper,
        }}
      >
        {drawer}
      </Drawer>
  )
}
