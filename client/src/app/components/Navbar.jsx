import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const { userData, status, loading } = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleSignOut = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    navigate('../login');
    
    // You may also want to dispatch an action to clear user data in the Redux store
    // dispatch(clearUserData()); // Replace with the actual action

    // Redirect the user to the sign-in page or any other desired location
    // history.push('/signin'); // If using React Router for navigation
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden smUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clinic Connect
        </Typography>

        <Hidden xsDown>
          <div style={{ display: 'flex' }}>
            <NavLink to="/private/client" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="h6" component="div" style={{ marginRight: '16px' }}>
                Client
              </Typography>
            </NavLink>
            <NavLink to="/private/clinician" style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant="h6" component="div" style={{ marginRight: '16px' }}>
                Clinician
              </Typography>
            </NavLink>
          </div>
        </Hidden>

        <Hidden smUp>
          <Drawer
            anchor="right"
            open={menuOpen}
            onClose={toggleMenu}
          >
            <List>
              <ListItem button component={NavLink} to="/private/client" onClick={toggleMenu}>
                <ListItemText primary="Client" />
              </ListItem>
              <ListItem button component={NavLink} to="/private/clinician" onClick={toggleMenu}>
                <ListItemText primary="Clinician" />
              </ListItem>
              <ListItem button  onClick={toggleMenu}>
                <ListItemText primary={userData?.name} />
              </ListItem>
              {/* <ListItem button component={NavLink} to="/private/clinician" onClick={toggleMenu}> */}
              <Button
              onClick={handleSignOut}
              variant="contained"
              color="error"
            >
              Sign Out
            </Button>
              {/* </ListItem> */}
              
            </List>
          </Drawer>
        </Hidden>

        <Hidden xsDown>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              {userData?.name}
            </Typography>
            <Button
              onClick={handleSignOut}
              variant="contained"
              color="error"
            >
              Sign Out
            </Button>
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

