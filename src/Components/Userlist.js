import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(async() => {
        try {
            let data = await fetch("https://61c298c89cfb8f0017a3e5fc.mockapi.io/users");
            let userdata = await data.json()
            setUsers(userdata);
        } catch (error) {
            console.error(error);
        }
    }, [])
    let handleDelete = (async (id) => {
         await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/users/${id}`, {
            method: 'DELETE',
        });
        let userDetail = await fetch("https://61c298c89cfb8f0017a3e5fc.mockapi.io/users")
        let reData = await userDetail.json()
        setUsers(reData)
    })
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">User Details</h1>
                        <Link to="/userform" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                    </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Changes</th>
                                </tr>
                            </thead>
                        
                            <tbody>

                                {users.map((ele,index)=>{
                                    return(
                                <tr key= {index}>
                                   <td>{ele.name}</td>
                                   <td>{ele.position}</td>
                                   <td>{ele.office}</td>
                                   <td>{ele.age}</td>
                                   <td>{ele.startDate}</td>
                                   <td>{ele.salary}</td>
                                   <td>
                                     <Link to={`/user-edit/${ele.id}`}>  <button className='btn btn-info'>Edit</button> </Link>
                                       <button className='btn btn-danger' onClick={()=>handleDelete(ele.id)}>Delete</button>
                                   </td>
                               </tr>
                                )})}
                                <tr>
                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ul>
           
           </ul>
        </>
    )

}

export default Userlist
