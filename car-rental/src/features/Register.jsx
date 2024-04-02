import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row, Toast } from 'react-bootstrap'
import { FaPenSquare } from 'react-icons/fa'
import RegisterImg from '/src/assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'


const Register = () => {
  const redirect=useNavigate()
  let initialState={username:'',email:'',password:'',cpassword:'',mobile:'',role:"1"}
  let [user,setUser]=useState({...initialState}) //state object
  let handleSubmit=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user1 = userCredential.user;
        toast.success("registered successfully")
        //redirect home page 
        redirect('/')
      })
      .catch((error) => {
        toast.error(error.message)
      });
    }
  return (
    <>
      <Container className='mt-5 shadow p-2'>
        <h1><FaPenSquare/> Register Here</h1>
        <hr/>
            <Row>
              <Col xs={6}><Image src={RegisterImg} fluid/> </Col>
              <Col xs={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control name="mobile" value={user.mobile} onChange={(e)=>setUser({...user,mobile:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="cpassword" type="password" value={user.cpassword} onChange={(e)=>setUser({...user,cpassword:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Button variant='primary' type="submit">Submit</Button>
                </Form>
                <p>Already an Account ?? <Link to='/login'>Login</Link></p>
              </Col>
            </Row>
      </Container>
 

        

</>
  )
}

export default Register
