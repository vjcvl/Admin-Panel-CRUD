import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
function ProductList() {
    const [product,setProduct] = useState([])
    useEffect(async() => {
        try {
            let data = await fetch("https://61c298c89cfb8f0017a3e5fc.mockapi.io/product");
            let productData = await data.json();
            setProduct(productData);
        } catch (error) {
            console.error(error);
        }
    }, [])
    let handleDelete=(async (id)=>{
         await fetch(`https://61c298c89cfb8f0017a3e5fc.mockapi.io/product/${id}`,
         {
             method : "DELETE"
         })
         let data = await fetch("https://61c298c89cfb8f0017a3e5fc.mockapi.io/product");
         let getData = await data.json();
         setProduct(getData)
    })
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Product List</h1>
                <Link class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" to="/productform">
                    <i class="fas fa-download fa-sm text-white-50"></i>
                    Create Product</Link>
            </div>
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Product Details</th>
                                            <th>Product Price</th>
                                            <th>Modify</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {product.map((ele)=>{
                                            return(
                                            <tr>
                                            <td>{ele.productname}</td>
                                            <td>{ele.productdetails}</td>
                                            <td>{ele.productprice}</td>
                                            <td>
                                               <Link to={`/product-edit/${ele.id}`}><button className='btn btn-info'>Edit</button></Link> 
                                                <button className='btn btn-danger' onClick={()=>handleDelete(ele.id)}>Delete</button>
                                            </td>
                                            
                                        </tr>
                                        )})}
                                        
                                    </tbody>
                                    </table>
                                    </div>
                                    </div>
                                    </div>    
        </>
    )
}

export default ProductList
