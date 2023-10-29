import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
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
      .delete(`http://localhost:5000/deleteclient/${id}`, {
        // headers: {
        //   Accept: "application/json",
        //   "content-type": "application/json",
        //   Authorization: localStorage.getItem("token"),
        // },
      })
      .then(() => dispatch(listOfClientThunk()));
  };

  return (
    <div className="container mx-auto mt-6">
      <section className="flex justify-between items-center mb-4">
        <Link to="create" className="btn btn-primary">
          Create Client
        </Link>
      </section>
      <h2 className="text-2xl font-bold">Clients List</h2>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
         
            <th>Name</th>
           
            <th>Read</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item?._id}>
            
              <td>{item?.firstName + " "+ item?.lastName}</td>
          
              <td>
                <Link to={`details/${item?._id}`} className="text-blue-500">
                  Details
                </Link>
              </td>
              <td>
                <Link to={`edit/${item?._id}`} className="text-blue-500">
                  Edit
                </Link>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(item?._id)}
                  variant="danger"
                  className="p-1"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
