import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import useFetchCollection from '../../customhook/useFetchCollection'
import { STORE_MODELS, selectmodels } from '../../redux/modelSlice'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import {toast} from 'react-toastify'
const ViewModel = () => {
    const {data}=useFetchCollection("models")  
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(STORE_MODELS(data))
    },[data])
    const allModels=useSelector(selectmodels)

    let handleDelete=async(id)=>{
        if(window.confirm("Are you sure to delete this??")){
            try{
                 const docRef= doc(db,"models",id)
                 await deleteDoc(docRef)
                 toast.success("model deleted")
            }
            catch(error){toast.error(error.message)}
        }
    }
  return (
    <div class="card">
    <div class="card-header">
        <h1>View Models <Link  type="button" class="btn btn-primary float-end" to='/admin/addmodel' >
            Add Model
        </Link></h1>
        
    </div>
    <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th>Brand</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                  <tbody>
                    {allModels.length==0 &&  <tr><td colSpan={6}>No Model Found</td></tr>}
                    {allModels.map((model,i)=>
                        <tr key={model.id}>
                            <td>{i+1}</td>
                            <td>{model.brand}</td>
                            <td>{model.id}</td>
                            <td>{model.name}</td>
                            <td>{model.status == "active" ? <span
                                class="badge rounded-pill text-bg-success">Active</span>
                             :
                             <span
                                class="badge rounded-pill text-bg-danger">Inactive</span>}</td>
                            <td>
                            <Link to={`/admin/editmodel/${model.id}`}
                                        type="button"
                                        class="btn btn-success me-2"
                                    >
                                        <FaPenAlt/>
                                    </Link>
                                    <button
                                        type="button"
                                        class="btn btn-danger" 
                                        onClick={()=>handleDelete(model.id)}
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

export default ViewModel
