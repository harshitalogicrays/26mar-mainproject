import React, { useEffect, useState } from 'react'
import { Link,useNavigate ,useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import {useSelector} from 'react-redux'
import useFetchCollection from '../../customhook/useFetchCollection'

const AddModel = () => {
    const {data:brands} =useFetchCollection("brands")
    const {id}=  useParams()
    console.log(id)
    const [model,setModel]=useState({brand:'',name:'',desc:'',status:''})
    const [isActive,setIsActive]=useState(false)
    const navigate=useNavigate()

    useEffect(()=>{

    },[id])

    let handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const docRef=collection(db,"models")
            await addDoc(docRef,{...model,
                status:isActive ? "active" : "inactive",
                createdAt:Timestamp.now().toMillis()
            })
            toast.success("model added")
            navigate('/admin/viewmodel')
        }
        catch(error){
            toast.error(error.message)
        }
         }
  return (
    <div class="card">
    <div class="card-header">
        <h1>{id?"Edit ":"Add "}Model <Link  type="button" class="btn btn-primary float-end"  to='/admin/viewmodel' >
            View Models
        </Link>
        </h1>
    </div>
    <div class="card-body">
            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Brand</label>
                <select
                    class="form-select" name="brand" value={model.brand} onChange={(e)=>setModel({...model,brand:e.target.value})}>              
                    <option value=''>Select one</option>
                    {brands.map(brand=><option key={brand.id}>{brand.name}</option>)}
                </select>
            </div>
            
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input  type="text" class="form-control" name="name" value={model.name} onChange={(e)=>setModel({...model,name:e.target.value})} />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Description</label>
                <textarea class="form-control" name="desc"  rows={8} value={model.desc} onChange={(e)=>setModel({...model,desc:e.target.value})}></textarea>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" checked={isActive} onChange={(e)=>setIsActive(!isActive)}/>
                <label class="form-check-label" for=""> {isActive ? "active" :"inactive"} </label>
            </div>
                     
            <button type="submit"  class="btn btn-primary"> {id? "Update ": "Submit"}  </button>
            
            
      </form>
            </div>
        </div>
  )
}

export default AddModel
