import React,{useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import {useFormik} from 'formik'
function Productedit() {
    let params = useParams();
    
    useEffect(async() => {
        try {
            let data = await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/product/${params.id}`)
            let productdata = await data.json();
            console.log(productdata);
            formik.setValues(productdata);
        } catch (error) {
            console.error(error);
        }
    }, [])

    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            productname: "",
            productdetails : "",
            productprice : 0
            
        },
        onSubmit: async values => {
            try {
                await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/product/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                navigate('/productlist')
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
                            <label>Product Name</label>
                            <input type="text" name='productname' onChange={formik.handleChange}
                                value={formik.values.productname} className='form-control'></input>
                        </div>
                        <div className='col-lg-6'>
                            <label>Product Details</label>
                            <input type="text" name='productdetails' onChange={formik.handleChange}
                                value={formik.values.productdetails} className='form-control'></input>
                        </div>
                        <div className='col-lg-4'>
                            <label>Price</label>
                            <input type="number" name='productprice' onChange={formik.handleChange}
                                value={formik.values.productprice} className='form-control'></input>
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

export default Productedit
