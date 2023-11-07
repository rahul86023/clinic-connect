import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const { userData, status, loading } = useSelector((store) => store?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    navigate('../login');
    
    // You may also want to dispatch an action to clear user data in the Redux store
    // dispatch(clearUserData()); // Replace with the actual action

    // Redirect the user to the sign-in page or any other desired location
    // history.push('/signin'); // If using React Router for navigation
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clinic Connect
        </Typography>
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import { NavLink,useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleOpenMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCloseMenu = () => {
//     setAnchorEl(null);
//   };
//   const { userData, status, loading } = useSelector(
//     (store) => store?.user
//   );

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSignOut = () => {
//     // Remove the token from local storage
//     localStorage.removeItem("token");
//     navigate('../login');
    
//     // You may also want to dispatch an action to clear user data in the Redux store
//     // dispatch(clearUserData()); // Replace with the actual action

//     // Redirect the user to the sign-in page or any other desired location
//     // history.push("/signin"); // If using React Router for navigation
//   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {/* <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenMenu}
//         >
//           <MenuIcon />
//         </IconButton> */}
//         <Typography variant="h6" component="div">
//                 Clinic Connect
//               </Typography>
//         {/* <Grid container spacing={1}>
//           <Grid item> */}
//             <NavLink to="/private/client" style={{ textDecoration: 'none', color: 'white' }}>
//               <Typography variant="h6" component="div">
//                 Client
//               </Typography>
//             </NavLink>
//           {/* </Grid>
//           <Grid item> */}
//             <NavLink to="/private/clinician" style={{ textDecoration: 'none', color: 'white' }}>
//               <Typography variant="h6" component="div">
//                 Clinician
//               </Typography>
//             </NavLink>
//           {/* </Grid>
//         </Grid> */}
//         <Typography variant="body1" sx={{ marginRight: 2 }}>
//           {userData?.name}
//         </Typography>
        
//         <Button
//                     onClick={handleSignOut}
//                     variant="contained"
//                     color="error"
                  
//                   >
//                     Sign Out
//                   </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

