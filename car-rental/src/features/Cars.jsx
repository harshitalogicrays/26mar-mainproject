import React, { useEffect, useState } from 'react'
import useFetchCollection from '../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { STORE_CARS, selectcars } from '../redux/carSlice'
import CarList from './CarList'
import Loader from './Loader'

const Cars = () => {
  const {data,isLoading} =useFetchCollection('cars')
  const dispatch=useDispatch()
  useEffect(()=>{
        dispatch(STORE_CARS(data))
    },[data])
    const allCars=useSelector(selectcars)
  return (
    <>
    {isLoading && <Loader/>}
    <h1 className='text-center mt-5'>Our Best Offers</h1><hr/>
      <CarList cars={allCars}/>
    </>
  )
}

export default Cars
