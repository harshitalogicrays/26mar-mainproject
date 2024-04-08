import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useFetchCollection from '../../customhook/useFetchCollection'
import {useDispatch,useSelector} from 'react-redux'
import { STORE_BRANDS, selectBrands } from '../../redux/brandSlice'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
const ViewBrand = () => {
   const {data} = useFetchCollection("brands")
    const dispatch=useDispatch()
   useEffect(()=>{
     dispatch(STORE_BRANDS(data))
   },[data])

   const allbrands=useSelector(selectBrands)
  return (
    <div class="card">
        <div class="card-header">
            <h1>View Brands <Link  type="button" class="btn btn-primary float-end" to='/admin/addbrand' >
                Add Brand
            </Link>
            </h1>
        </div>
        <div class="card-body">
                <div class="table-responsive" >
                    <table class="table table-bordered table-striped table-hover"  >
                        <thead>
                            <tr>
                                <th scope="col">Sr. No</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th>Description</th><th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allbrands.length == 0 &&  <tr><td colSpan={5}>No Brand Found</td></tr>}
                           {allbrands.map((brand,index)=>
                            <tr key={brand.id}>
                                <td scope="row">{index+1}</td>
                                <td>{brand.id}</td>
                                <td>{brand.name}</td>
                                <td>{brand.desc}</td>
                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-success me-2"
                                    >
                                        <FaPenAlt/>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                    >
                                        <FaTrashAlt/>
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                </div>
            </div>
       
  )
}

export default ViewBrand
