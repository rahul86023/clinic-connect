import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/account/loginSlice";

import detailsOfClinicianReducer from "../features/clinician/detailsSlice";
import detailsOfClientReducer from "../features/client/detailsSlice";

import listOfClinicianReducer from "../features/clinician/listSlice";
import listOfClientsReducer from "../features/client/listSlice";
import createClientReducer from "../features/client/createSlice";
import createClinicianReducer from "../features/clinician/createSlice";
import editClientReducer from "../features/client/editSlice";
import editClinicianReducer from "../features/clinician/editSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,

    listOfClinicians: listOfClinicianReducer,
    listOfClients: listOfClientsReducer,
    detailsOfClinician: detailsOfClinicianReducer,
    detailsOfClient: detailsOfClientReducer,
    createClient: createClientReducer,
    createClinician: createClinicianReducer,
    editClient: editClientReducer,
    editClinician: editClinicianReducer,
  },
});
