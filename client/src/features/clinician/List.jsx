import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { listOfClinicianThunk } from "./listSlice";
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
      <section className="flex justify-between items-center mb-4">
        <Link to="create" className="btn btn-primary">
          Create Clinician
        </Link>
      </section>
      <h2 className="text-2xl font-bold">Clinician List</h2>
      <TableContainer component={Paper} className="mt-4">
        <Table aria-label="Clinicians Table">
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
                  <Button
                    component={Link}
                    to={`details/${item?._id}`}
                    variant="contained"
                    color="primary"
                    endIcon={<Visibility />}
                  >
                    Read
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    to={`edit/${item?._id}`}
                    variant="contained"
                    color="warning"
                    endIcon={<Edit />}
                  >
                    Update
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(item?._id)}
                    variant="contained"
                    color="error"
                    endIcon={<Delete />}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
