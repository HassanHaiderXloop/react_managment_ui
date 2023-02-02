import React, {useState} from 'react';
import EmployeeService from './service/EmployeeService';


const AddEmployee = () => {


    

    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");

    const handleChange = (event)=>{
        const value = event.target.value;
        console.log(value);
        //setEmployee({...employee, value});
    }

    const saveEmployee = (e)=>{
        e.preventDefault();
        const employee = {
            firstName:firstName,
            lastName:lastName,
            emailId:emailId,
        };

        fetch('http://localhost:8080/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
        }).then((response)=>response.json()).then((data)=>console.log(data))

        // fetch("http://localhost:8080/")
        // EmployeeService.saveEmployee(employee).then((response)=>{
        //     console.log(response);

        // }).catch((error)=>{
        //     console.log(error)
        // })
    }

  return (
    <div className="flex max-w-2xl justify-center bg-green-200 shadow mx-auto">
        <div className="px-8 py-8" >
            <div className="font-thick text-2xl tracking-wider">
                <h1>ADD STAFF</h1>
            </div>
            <div className="items-center justify-center h-14 w-full my-4" >
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input type= "text" name="firstName" value={firstName}  onChange={(e)=>setFirstName(e.target.value) }   className="h-10 w-96 border mt-2  px-2 py-2" ></input>

            </div>
            <div className="items-center justify-center h-14 w-full my-4" >
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input type= "text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value) } className="h-10 w-96 border mt-2  px-2 py-2" ></input>

            </div>
            <div className="items-center justify-center h-14 w-full my-4" >
                <label className="block text-gray-600 text-sm font-normal">Email Name</label>
                <input type= "text" name="emailId" value={emailId} onChange={(e)=>setEmailId(e.target.value) }  className="h-10 w-96 border mt-2  px-2 py-2" ></input>

            </div>
            
            <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4" >
                <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700">Save</button>
                <button className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700">Clear</button>
            </div>

        </div>
      
    </div>
  )
}

export default AddEmployee;
