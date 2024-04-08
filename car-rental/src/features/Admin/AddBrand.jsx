import React, { useState } from 'react'
import BrandImg from '/src/assets/admin/img/brand.png'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config'
const AddBrand = () => {
    const [brand,setBrand]=useState({name:'',desc:''})
    const navigate=useNavigate()
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const docRef=collection(db,"brands")
            await addDoc(docRef,{...brand,createdAt:Timestamp.now().toMillis()})
            toast.success('Brand Added')
            navigate('/admin/viewbrand')
        }
        catch(error){
            toast.error(error.message)
        }
    }
  return (
    <div class="card">
        <div class="card-header">
            <h1>Add Brand <Link  type="button" class="btn btn-primary float-end"  to='/admin/viewbrand' >
                View Brands
            </Link>
            </h1>
        </div>
        <div class="card-body">
            <div className="row">
                <div className="col-4">
                     <img src={BrandImg} className='img-fluid'></img>
                </div>
                <div className="col-8">

                <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input  type="text" class="form-control" name="name" value={brand.name} onChange={(e)=>setBrand({...brand,name:e.target.value})}/>
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Description</label>
                    <textarea class="form-control" name="desc" value={brand.desc} onChange={(e)=>setBrand({...brand,desc:e.target.value})}></textarea>
                </div>
                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    Submit
                </button>
                
                
          </form>
                </div>
            </div>
       
        </div>
       
    </div>
  )
}

export default AddBrand
