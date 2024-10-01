import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {Link}  from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open,setOpen] = useState(false);


  

  return (
    <div>
        <IconButton onClick={()=> setOpen(true)}>
            <MenuRoundedIcon className='link'></MenuRoundedIcon>
        </IconButton>
        <Drawer
            anchor={"right"}
            open={open}
            onClose={()=>
                setOpen(false)
            }
        >
        <div className='drawer-link'>
        <Link to='/'>
          <p className='link'>Home</p>
          </Link>
          <Link to='/compare'>
          <p className='link'>Compare</p>
          </Link>
          <Link to='/watchlist'>
          <p className='link'>WatchList</p>
          </Link>
          <Link to='/dashboard'>
          <Button text={"Dashboard"} onClick={()=> console.log("edge")} />
          </Link>
        </div>
        </Drawer>
    </div>
  );
}
