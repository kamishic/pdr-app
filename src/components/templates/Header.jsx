import React,{useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from 'react-router-dom'
//import { Link } from 'gatsby';


const toggleDrawer = (status,setToggle) => () => {
  setToggle(status)
};

const Header = () => {
  const [toggle,setToggle] = useState(false)

  return (
    <header>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu" onClick={toggleDrawer(true, setToggle)}>
             <MenuIcon />
          </IconButton>
          <Drawer open={toggle} onClose={toggleDrawer(false,setToggle)}>
              <div
                tabIndex={0}
                role="button"
                onClick={toggleDrawer(false,setToggle)}
                onKeyDown={toggleDrawer(false,setToggle)}
              >
                <div>
                  <List>
                    <Link to="/">
                      <ListItem button>
                        <ListItemText primary="Home" />
                      </ListItem>
                    </Link>
                    <Link to="/pdr">
                      <ListItem button>
                        <ListItemText primary="PDR" />
                      </ListItem>
                    </Link>
                    <Link to="/">
                      <ListItem button>
                        <ListItemText primary="サインアウト" />
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </div>
            </Drawer>

        your PDR Cycles
        </Toolbar>
      </AppBar>
    </header>
  )
}





export default Header