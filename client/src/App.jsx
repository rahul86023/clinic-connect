import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Register from "./features/account/Register";
import Login from "./features/account/Login";
import { PublicLayout } from "./app/components/PublicLayout";
import { PrivateLayout } from "./app/components/PrivateLayout";
import ClientContainer from "./features/client/ClientContainer";
import ClinicianContainer from "./features/clinician/ClinicianContainer";
import { List as ClinicianList } from "./features/clinician/List";
import { List as ClientList } from "./features/client/List";
import { Details as ClinicianDetails } from "./features/clinician/Details";
import { Details as ClientDetails } from "./features/client/Details";
import Create from "./features/client/Create";
import { Create as CreateClinician } from "./features/clinician/Create";
import  Edit  from "./features/client/Edit";
import { Edit as EditClinician } from "./features/clinician/Edit";
import Error from "./app/components/Error";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PublicLayout />}>
          {/* Set the Register component as the index route */}
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/private" element={<PrivateLayout />}>
          <Route path="client" element={<ClientContainer />}>
            <Route index element={<ClientList />} />
            <Route path="details/:id" element={<ClientDetails />} />
            <Route path="create" element={<Create />} />
            <Route path="edit/:id" element={<Edit />} />
          </Route>

          <Route path="clinician" element={<ClinicianContainer />}>
            <Route index element={<ClinicianList />} />
            <Route path="details/:id" element={<ClinicianDetails />} />
            <Route path="create" element={<CreateClinician />} />
            <Route path="edit/:id" element={<EditClinician />} />
          </Route>
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
