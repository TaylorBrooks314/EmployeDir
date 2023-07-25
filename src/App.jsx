import "./index.css";
import HomePage from "./components/HomePage";
import { useState } from "react";
import { data } from "./data";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";

export default function App() {
  let [employees, setEmployees] = useState(data);



  function addEmployee(emp) {
    setEmployees([...employees, emp]);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage employees={employees} addEmployee={addEmployee} />}/>
        <Route path="/employee/:id" element={<EmployeePage employees={employees} />}/>
        
      </Routes>
      
    </div>
  );
}
