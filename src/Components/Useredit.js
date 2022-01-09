import React,{useEffect} from 'react'
import { useFormik } from 'formik';
import {useNavigate,useParams} from 'react-router-dom';

function Useredit() {
    let params = useParams();
    
    useEffect(async() => {
        try {
            let data = await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/users/${params.id}`)
            let userdata = await data.json();
            
            formik.setValues(userdata);
        } catch (error) {
            console.error(error);
        }
    }, [])

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            position: "",
            office: "",
            age: 0,
            startDate: "",
            salary: ""
        },
        onSubmit: async values => {
            try {
                await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/users/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                navigate('/userlist')
            } catch (error) {
                console.log(error)

            }
        }
    })

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            
            </div>
            <div className='contianer'>
                <form onSubmit={formik.handleSubmit} >
                    <div className='row'>
                        <div className='col-lg-6'>
                            <label>Name</label>
                            <input type="text" name='name' onChange={formik.handleChange}
                                value={formik.values.name} className='form-control'></input>
                        </div>
                        <div className='col-lg-6'>
                            <label>Position</label>
                            <input type="text" name='position' onChange={formik.handleChange}
                                value={formik.values.position} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Office</label>
                            <input type="text" name='office' onChange={formik.handleChange}
                                value={formik.values.office} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Age</label>
                            <input type="number" name='age' onChange={formik.handleChange}
                                value={formik.values.age} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Start Date</label>
                            <input type="date" name='startDate' onChange={formik.handleChange}
                                value={formik.values.startDate} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Salary</label>
                            <input type="number" name='salary' onChange={formik.handleChange}
                                value={formik.values.salary} className='form-control'></input>
                        </div>
                        <div className='col-lg-12 mt-3'>
                            <input type="submit" className='btn btn-primary'></input>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )

}

export default Useredit
