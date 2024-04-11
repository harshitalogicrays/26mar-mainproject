import React, { useEffect, useState } from 'react'
import useFetchCollection from '../../../customhook/useFetchCollection'
import { ref, uploadBytesResumable , getDownloadURL} from 'firebase/storage'
import { db, storage } from '../../../firebase/config'
import {toast} from 'react-toastify'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
const AddCar = () => {
  const navigate=useNavigate()
  let Body=["Sedan","SUV","Truck","Van","Sports"]
  let [car,setCar]=useState({brand:'',model:'',power:'',engine:'',images:[],gearbox:'',body:'',fuel:'',count:'',locations:[],pricewf:'',pricewof:''})
  let [uploadProgress,setUploadProgress]=useState(0)

  const {data:brands}=useFetchCollection("brands")
  const {data:models}=useFetchCollection("models")

  let [selectBrand,setSelectBrand]=useState('')
  let [allModels,setAllModels]=useState([])
  let [selectModel,setSelectModel]=useState('')
  useEffect(()=>{
    if(selectBrand !=''){
      let filterModels=models.filter(item=>item.brand==selectBrand)
      setAllModels(filterModels)
      setCar({...car,brand:selectBrand})
    }
  },[selectBrand])
 
  
//   let handleImages=(e)=>{
//     let file=e.target.files[0]
//    let storageRef = ref(storage,`car-rental/cars/${Date.now()}`)
//    const uploadTask = uploadBytesResumable(storageRef, file);
//    uploadTask.on('state_changed',(snapshot) => {
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       setUploadProgress(progress)
      
//   }, 
//   (error) => {toast.error(error.message)  }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
//   }


let handleImages=(e)=>{
  let allImages=e.target.files
  let arr=[]
  Array.from(allImages).forEach((file)=>{
    let storageRef = ref(storage,`car-rental/cars/${Date.now()}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',(snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress)
        
    }, 
    (error) => {toast.error(error.message)  }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
       arr.push(downloadURL)
      });
    }
);
  })
  setCar({...car,images:arr})
}

  let handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const docRef=collection(db,"cars")
      await addDoc(docRef,{...car,createdAt:Timestamp.now().toMillis()})
      toast.success("car added")
      navigate('/admin/viewcar')
    }
    catch(error){toast.error(error.message)}
  }
  return (
    <div className='container mt-5'>
        <div className="card">
          <div className="card-header">
            <h1>Add Car</h1>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="" class="form-label">Brand</label>
<select class="form-select" value={selectBrand} onChange={(e)=>setSelectBrand(e.target.value)}>
 <option value='' disabled>Select one</option>
  {brands.map((brand,i)=>
 <option key={i}>{brand.name}</option>)}
 </select>  </div>
    <div class="mb-3">
    <label for="" class="form-label">Model</label>
       <select class="form-select" name="model" value={selectModel} onChange={(e)=>{
        setSelectModel(e.target.value);setCar({...car,model:e.target.value})
        }}>
        <option value='' disabled>Select one</option>
         {allModels.map((model,i)=>
       <option key={i}>{model.name}</option>)}</select>
              </div>
              <div className="row">
                  <div class="mb-3 col">
                    <label for="" class="form-label">Power</label>
                    <input  type="text" name="power" class="form-control" value={car.power}
                    onChange={(e)=>setCar({...car,power:e.target.value})} />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Engine</label>
                    <input  type="text" name="engine" class="form-control" value={car.engine}
                    onChange={(e)=>setCar({...car,engine:e.target.value})} />
                  </div>
              </div>
                  {uploadProgress > 0 && <div class="progress">
                <div class="progress-bar" style={{width: `${uploadProgress}%`}}>
                  {uploadProgress < 100 ? `uploading ${uploadProgress}%` :`uploaded ${uploadProgress}%`}
                </div>
              </div>}
              <div class="mb-3">
                <label for="" class="form-label">Images</label>
                <input type="file" class="form-control" name="images" multiple onChange={handleImages}/>
              </div>
              <div className="row">
                <div class="mb-3 col-4">
                  <label for="" class="form-label">GearBox</label>
                  <select class="form-select" name="gearbox" value={car.gearbox}
                    onChange={(e)=>setCar({...car,gearbox:e.target.value})}>
                    <option value='' disabled>Select one</option>
                    <option>Automatic</option>
                    <option>Manual</option>
                  </select>
                </div>
                <div class="mb-3 col-4">
                  <label for="" class="form-label">Body</label>
                  <select class="form-select" name="body" value={car.body}
                    onChange={(e)=>setCar({...car,body:e.target.value})}>
                    <option value='' disabled>Select one</option>
                    {Body.map((body,i)=><option key={i}>{body}</option>)}
                  </select>
                </div>
                <div class="mb-3 col-4">
                  <label for="" class="form-label">Fuel Type</label>
                  <select class="form-select" name="fuel" value={car.fuel}
                    onChange={(e)=>setCar({...car,fuel:e.target.value})}>
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
                    <input  type="number" name="count" class="form-control" value={car.count}
                    onChange={(e)=>setCar({...car,count:e.target.value})} />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Available Locations</label>
                    <input  type="text" name="locations" class="form-control" value={car.locations}
                    onChange={(e)=>setCar({...car,locations:e.target.value})} />
                  </div>
              </div>
              <div className="row">
                  <div class="mb-3 col">
                    <label for="" class="form-label">Price/KM With Fuel</label>
                    <input  type="number" name="pricewf" class="form-control" value={car.pricewf}
                    onChange={(e)=>setCar({...car,pricewf:e.target.value})} />
                  </div>
                  <div class="mb-3 col">
                    <label for="" class="form-label">Price/KM without Fuel</label>
                    <input  type="number" name="pricewof" class="form-control"value={car.pricewof}
                    onChange={(e)=>setCar({...car,pricewof:e.target.value})}/>
                  </div>
              </div>
              <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary" >
                Submit
              </button>
              </div>
              
              </form>
              </div>
          </div>
        </div>
    )
}

export default AddCar
