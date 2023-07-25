import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "../index.css"



function EmployeePage({employees}) {

    let [list, setList] = useState({})
    const params = useParams()

    // const navigate = useNavigate()

    useEffect( () => {
        console.log('hjg')
        let test = employees.filter((emp) => {
            
            if (emp.id == params.id) {
                return true
            } 
            return false
        })
        setList(test[0])     
    }, [])

    console.log( "this is list[0]")

    // function click(){
        // navigate("/")
    //     console.log("he")
    // }


    return ( 
        <div>
            <Header title="<  Employee Page" />
            {list.name && (
            <div>
                <div  className="item">
                    <img src={list.headshot} alt="headshot" />
                    <div>
                        <h3>{list.name}</h3>
                        <p> {list.title}</p>
                    </div>
                </div>
                <div className="items">
                <h4>Call Office</h4>
                <p>{list.phone}</p>
                </div>
                <div className="items">
                <h4>SMS</h4>
                <p>{list.phone}</p>
                </div>
                <div className="items">
                <h4>Email</h4>
                <p>{list.email}</p>
                </div>
            </div>)}
        </div>
    );
}
export default EmployeePage;