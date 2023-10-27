import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";
import AddUser from "./AddUser";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/readuser/:id" element={<ReadUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
