import './App.css';
import { Route, Routes } from "react-router-dom"
import HomePage from './Component/HomePage';
import AddEditWorker from './Component/Workers/AddEditWorker';
import Header from './Component/Header';
import WorkersTable from './Component/Workers/WorkersTable';
import AddRoleToWorker from './Component/Roles/AddRoleToWorker';
import AddRole from './Component/Roles/AddRole';
import WorkerDetails from './Component/Workers/WorkerDetails';


function App() {

return <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/workers" element={<WorkersTable />} />
      <Route path='/homepage' element={<HomePage />} />
      <Route path='/addWorker'  element={<AddEditWorker />} />
      <Route path='/editWorker' element={<AddEditWorker />} />
      <Route path='/addRoleToWorker' element={<AddRoleToWorker />} />
      <Route path='/addRole' element={<AddRole />} />
      <Route path='/workerDetails' element={<WorkerDetails />} />
   
    </Routes>
  </div>
}

export default App;
