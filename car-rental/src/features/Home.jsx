import React, { useEffect, useState } from 'react'
import MySlider from './MySlider'
import About from './About'
import Services from './Services'
import FindCarForm from './FindCarForm'
import Cars from './Cars'

const Home = () => {
  // console.log(import.meta.env.VITE_APIKEY)
  return (
   <>
   
    <MySlider/>
    <FindCarForm/>
    <About/>
    <Services/>
    <Cars/>
   </>
  )
}

export default Home
