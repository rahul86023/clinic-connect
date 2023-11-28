import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ bottom: 0, top: 'auto', backgroundColor: 'black' }}>
      <Container>
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" color="inherit" sx={{ marginBottom: 1, color: 'white' }}>
            Clinic Connect
          </Typography>

          <Typography variant="body2" color="inherit" sx={{ color: 'white' }}>
            &copy; 2023 Clinic Connect. All Rights Reserved.
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GithubIcon from '@mui/icons-material/GitHub';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

// const Footer = () => {
//   return (
//     <AppBar position="fixed" color="primary" sx={{ bottom: 0, top: 'auto' }}>
//       <Container>
//         <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
//           <Typography variant="h6" color="inherit" sx={{ marginBottom: 1 }}>
//             Clinic Connect
//           </Typography>

//           {/* <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 1 }}>
//             <Link href="https://www.linkedin.com/in/rahul-chaurasia-997a56186/" target="_blank" color="inherit" sx={{ marginRight: 1 }}>
//               <LinkedInIcon />
//             </Link>

//             <Link href="https://github.com/rahul86023" target="_blank" color="inherit" sx={{ marginRight: 1 }}>
//               <GithubIcon />
//             </Link>
//           </div> */}

//           <Typography variant="body2" color="inherit">
//             &copy; 2023 Clinic Connect. All Rights Reserved.
//           </Typography>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Footer;
