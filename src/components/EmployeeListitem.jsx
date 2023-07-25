import { useState } from "react";
import { data } from "../data";
import "./list.css";
import { useNavigate } from "react-router-dom";




function EmployeeListItem(props) {
  console.log(data);

  let [state, setState] =useState()
  const navigate = useNavigate()

  
  
  function handleClick(id) {
    console.log(id)
    navigate(`/employee/${id}`)
  }


  return (
    <div onClick={() => handleClick(props.person.id)} className="item" key={props.person.id}>
      <img src={props.person.headshot} alt="headshot" />
      <div>
        <h3>{props.person.name}</h3>
        <p> {props.person.title}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
