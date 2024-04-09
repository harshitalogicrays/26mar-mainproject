import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

const ViewModel = () => {

  return (
    <div class="card">
    <div class="card-header">
        <h1>View Models <Link  type="button" class="btn btn-primary float-end" to='/admin/addmodel' >
            Add Model
        </Link></h1>
        model
    </div>
    <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered table-striped table-hover" >
                    <thead>
                        <tr>
                            <th scope="col">Sr. No</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th>Description</th><th>Action</th>
                        </tr>
                    </thead>
                  <tbody>
                    </tbody>
                </table>
            </div>
            
            </div>
        </div>
   

  )
}

export default ViewModel
