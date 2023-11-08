import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Box } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { listOfClientThunk } from "./listSlice";
import axios from "axios";

export const List = () => {
  const dispatch = useDispatch();

  const { list, status, loading } = useSelector((store) => store.listOfClients);

  useEffect(() => {
    dispatch(listOfClientThunk());
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://clinic-connect-backend.onrender.com/api/v1/clients/deleteclient/${id}`)
      .then(() => dispatch(listOfClientThunk()));
  };

  return (
    <div className="container mx-auto mt-6">
      <Typography variant="h4" component="h2" align="center" sx={{ textDecoration: 'underline' }}>
        Clients List
      </Typography>
      <section className="flex justify-between items-center mb-4">
        <Button
          component={Link}
          to={"create"}
          variant="contained"
          color="primary"
        >
          Create Client
        </Button>
      </section>
      <Box sx={{ overflowX: "auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="Clients Table">
            <TableHead>
              <TableRow>
                <TableCell>Serial No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item, index) => (
                <TableRow key={item?._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.firstName + " " + item?.lastName}</TableCell>
                  <TableCell>
                    <IconButton
                      component={Link}
                      to={`details/${item?._id}`}
                      color="primary"
                    >
                      <Visibility />
                    </IconButton>
                    <IconButton
                      component={Link}
                      to={`edit/${item?._id}`}
                      color="warning"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDelete(item?._id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import IconButton from "@mui/material/IconButton";
// import { Delete, Edit, Visibility } from "@mui/icons-material";
// import Typography from "@mui/material/Typography";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { listOfClientThunk } from "./listSlice";
// import axios from "axios";

// export const List = () => {
//   const dispatch = useDispatch();

//   const { list, status, loading } = useSelector((store) => store.listOfClients);

//   useEffect(() => {
//     dispatch(listOfClientThunk());
//   }, []);

//   const handleDelete = async (id) => {
//     await axios
//       .delete(`https://clinic-connect-backend.onrender.com/api/v1/clients/deleteclient/${id}`)
//       .then(() => dispatch(listOfClientThunk()));
//   };

//   return (
//     <div className="container mx-auto mt-6">
// <Typography variant="h4" component="h2" align="center" sx={{ textDecoration: 'underline' }}>
//         Clients List
//       </Typography>
//       <section className="flex justify-between items-center mb-4">
       
//         <Button
//                     component={Link}
//                     to={"create"}
//                     variant="contained"
//                     color="primary"
                 
//                   >
//                        Create Client
//                   </Button>
//       </section>
     
//       <TableContainer component={Paper} className="mt-4">
//         <Table aria-label="Clients Table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell>Read</TableCell>
//               <TableCell>Update</TableCell>
//               <TableCell>Delete</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {list.map((item) => (
//               <TableRow key={item?._id}>
//                 <TableCell>{item?.firstName + " " + item?.lastName}</TableCell>
//                 <TableCell>
              
//                   <IconButton 
//                    component={Link}
//                      to={`details/${item?._id}`}
//                   color="primary"
//                   >
//         <Visibility />
//       </IconButton>
//                 </TableCell>
//                 <TableCell>
              
//                   <IconButton 
//                    component={Link}
//                    to={`edit/${item?._id}`}
//                   color="warning"
//                   >
//         <Edit />
//       </IconButton>
//                 </TableCell>
//                 <TableCell>
                 
//                   <IconButton 
//                    onClick={() => handleDelete(item?._id)}
              
               
//                   color="error"
//                   >
//         <DeleteIcon />
//       </IconButton>
                  
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };
