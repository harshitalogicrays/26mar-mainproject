import React, { useRef } from 'react'
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './MySlider.css'
const MySlider = () => {
  const allSliders=[
    {id:'1',url:'/src/assets/images/car1.jpg',title:'First slide label',desc:'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
    {id:'2',url:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',title:'Second slide label',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id:'3',url:'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600',title:'Third slide label',desc:' Praesent commodo cursus magna, vel scelerisque nisl consectetur.'}
  ]

  return (
   <>
   
<Carousel fade indicators={false} controls={false}>
  {allSliders.map((slider,i)=>
      
      <Carousel.Item key={slider.id} interval={2000}>
        <Image src={slider.url} className='w-100' height='600'/>
        <Carousel.Caption>
          <h3>{slider.title}</h3>
          <p>{slider.desc}</p>
          <Link className='btn btn-light text-dark btn-lg' to='/cars'>Rent Now</Link>
        </Carousel.Caption>
      </Carousel.Item>

)}
   </Carousel>
   </>
  )
}

export default MySlider
