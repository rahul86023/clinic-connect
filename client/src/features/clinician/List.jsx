import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { listOfClinicianThunk } from "./listSlice";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Delete, Edit, Visibility } from "@mui/icons-material";

export const List = () => {
  const dispatch = useDispatch();

  const { list, status, loading } = useSelector((store) => store.listOfClinicians);

  useEffect(() => {
    console.log("inside useEffect");
    dispatch(listOfClinicianThunk());
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://clinic-connect-backend.onrender.com/api/v1/clinicians/deleteclinician/${id}`)
      .then(() => dispatch(listOfClinicianThunk()));
  };

  return (
    <div className="container mx-auto mt-6">
<Typography variant="h4" component="h2" align="center" sx={{ textDecoration: 'underline' }}>
        Clinicians List
      </Typography>
      <section className="flex justify-between items-center mb-4">
       
        <Button
                    component={Link}
                    to={"create"}
                    variant="contained"
                    color="primary"
                 
                  >
                       Create Clinician
                  </Button>
      </section>
     
      <TableContainer component={Paper} className="mt-4">
        <Table aria-label="Clients Table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Read</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item) => (
              <TableRow key={item?._id}>
                <TableCell>{item?.firstName + " " + item?.lastName}</TableCell>
                <TableCell>
              
                  <IconButton 
                   component={Link}
                     to={`details/${item?._id}`}
                  color="primary"
                  >
        <Visibility />
      </IconButton>
                </TableCell>
                <TableCell>
              
                  <IconButton 
                   component={Link}
                   to={`edit/${item?._id}`}
                  color="warning"
                  >
        <Edit />
      </IconButton>
                </TableCell>
                <TableCell>
                 
                  <IconButton 
                   onClick={() => handleDelete(item?._id)}
              
               
                  color="error"
                  >
        <Delete />
      </IconButton>
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
