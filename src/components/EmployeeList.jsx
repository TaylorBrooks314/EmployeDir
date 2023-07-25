import EmployeeListItem from "./EmployeeListitem";
import { data } from "../data";


function EmployeeList({ employees }) {
  return employees.map((employee, index) => {
    return <EmployeeListItem key={index} person={employee} />;
  });
}

export default EmployeeList;
