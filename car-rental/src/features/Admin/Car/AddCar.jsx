import React, { useState } from 'react'
import useFetchCollection from '../../../customhook/useFetchCollection'

const AddCar = () => {
  let Body=["Sedan","SUV","Truck","Van","Sports"]
  const {data:brands}=useFetchCollection("brands")

  let [car,setCar]=useState({brand:''})

  let handleBrand=(e)=>{
    setCar({...car,brand:e.target.value})
  }
  return (
    <div className='container mt-5'>
        <div className="card">
          <div className="card-header">
            <h1>Add Car</h1>
          </div>
          <div className="card-body">
              <div class="mb-3">
                <label for="" class="form-label">Brand</label>
                <select class="form-select" value={car.brand}
                  name="brand" onChange={handleBrand}>
                  <option value='' disabled>Select one</option>
                  {brands.map((brand,i)=>
                <option key={i}>{brand.name}</option>)}
                </select>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Model</label>
                <select class="form-select" name="model">
                  <option value=''>Select one</option>
                 
                </select>
              </div>
              <div className="row">
                  <div class="mb-3 col">
                    <label for="" class="form-label">Power</label>
                    <input  type="text" name="power" class="form-control"  />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Engine</label>
                    <input  type="text" name="engine" class="form-control"  />
                  </div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Images</label>
                <input type="file" class="form-control" name="images" multiple/>
              </div>
              <div className="row">
                <div class="mb-3 col-4">
                  <label for="" class="form-label">GearBox</label>
                  <select class="form-select" name="gearbox">
                    <option value='' disabled>Select one</option>
                    <option>Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
                <div class="mb-3 col-4">
                  <label for="" class="form-label">Body</label>
                  <select class="form-select" name="body">
                    <option value='' disabled>Select one</option>
                    {Body.map((body,i)=><option key={i}>{body}</option>)}
                  </select>
                </div>
                <div class="mb-3 col-4">
                  <label for="" class="form-label">Fuel Type</label>
                  <select class="form-select" name="gearbox">
                    <option value='' selected disabled>Select one</option>
                    <option>CNG</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>EV</option>
                    <option>Hybrid</option>
                  </select>
                </div></div>
                <div className="row">
                  <div class="mb-3 col">
                    <label for="" class="form-label">Car count</label>
                    <input  type="number" name="count" class="form-control"  />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Available Locations</label>
                    <input  type="text" name="locations" class="form-control"  />
                  </div>
              </div>
              <div className="row">
                  <div class="mb-3 col">
                    <label for="" class="form-label">Price/KM With Fuel</label>
                    <input  type="number" name="pricewithfuel" class="form-control"  />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Price/KM without Fuel</label>
                    <input  type="number" name="pricewithoutfuel" class="form-control"  />
                  </div>
              </div>
              <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary" >
                Submit
              </button>
              </div>
              
            
              </div>
          </div>
        </div>
    )
}

export default AddCar
