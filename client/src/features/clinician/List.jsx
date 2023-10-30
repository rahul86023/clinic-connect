import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { listOfClinicianThunk } from "./listSlice";
import axios from "axios";

export const List = () => {
  const dispatch = useDispatch();

  const { list, status, loading } = useSelector(
    (store) => store.listOfClinicians
  );

  useEffect(() => {
    console.log("inside useEffect");
    dispatch(listOfClinicianThunk());
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/v1/clinicians/deleteclinician/${id}`, {
        // headers: {
        //   Accept: "application/json",
        //   "content-type": "application/json",
        //   Authorization: localStorage.getItem("token"),
        // },
      })
      .then(() => dispatch(listOfClinicianThunk()));
  };
  console.log(list);
  return (
    <div className="container mx-auto mt-6">
      <section className="flex justify-between items-center mb-4">
        <Link to="create" className="btn btn-primary">
          Create Clinician
        </Link>
      </section>
      <h2 className="text-2xl font-bold">Clinician List</h2>
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
              <td>{item?.firstName + " " + item?.lastName}</td>
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

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { Button, ListGroup, Table } from "react-bootstrap";
// import { listOfClinicianThunk } from "./listSlice";
// import axios from "axios";
// export const List = () => {
//   const dispatch = useDispatch();

//   const { list, status, loading } = useSelector(
//     (store) => store.listOfClinicians
//   );

//   useEffect(() => {
//     console.log("inside useffect");
//     dispatch(listOfClinicianThunk());
//   }, []);

//   const handleDelete = async (id) => {
//     await axios
//       .delete(`http://localhost:5000/deleteclinician/${id}`, {
//         // headers: {
//         //   Accept: "application/json",
//         //   "content-type": "application/json",
//         //   Authorization: localStorage.getItem("token"),
//         // },
//       })
//       .then(() => dispatch(listOfClinicianThunk()));
//   };
//   console.log(list);
//   return (
//     <>
//       <section className="section">
//         <Link to="create" className="btn">
//           Create Clinician
//         </Link>
//       </section>
//       <h2>Clinician List</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>

//             <th>Details</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((item) => (
//             <tr key={item?._id}>
//               <td>{item?.firstName + item?.lastName}</td>

//               <td>{<Link to={`details/${item?._id}`}>Details</Link>}</td>
//               <td>{<Link to={`edit/${item?._id}`}>Edit</Link>}</td>
//               <td>
//                 <Button onClick={() => handleDelete(item?._id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </>
//   );
// };
