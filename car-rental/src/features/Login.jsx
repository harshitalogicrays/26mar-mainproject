import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { FaLock, FaPenSquare } from 'react-icons/fa'
import RegisterImg from '/src/assets/register.png'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'

const Login = () => {
  const redirect=useNavigate()
  let initialState={email:'',password:''}
  let [user,setUser]=useState({...initialState}) //state object
  let handleSubmit=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      const user1 = userCredential.user;
      toast.success('loggedIn Successfully')
      redirect('/')
    })
    .catch((error) => {
     toast.error(error.message)
    });
    }
    const provider = new GoogleAuthProvider();
    let loginWithGoogle=()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
          const user = result.user;
          toast.success('loggedIn Successfully')
          redirect('/')
       
      }).catch((error) => {
        toast.error(error.message)
      });
    }
  return (
    <>
      <Container className='mt-5 shadow p-2'>
        <h1><FaLock/> Login Here</h1>
        <hr/>
            <Row>
              <Col xs={6}><Image src={RegisterImg} fluid/> </Col>
              <Col xs={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></Form.Control>
                    </Form.Group>
                    <div class="d-grid gap-2">
                    <Button variant='primary' type="submit">Login</Button>
                    </div>
                    <hr/>
                    <div class="d-grid gap-2">
                    <Button variant='danger' type="button" onClick={loginWithGoogle}>Login with google</Button>
                    </div>
                    
                </Form>
                <p>create an Account ?? <Link to='/register'>register here</Link></p>
              </Col>
            </Row>
      </Container>
 

        

</>
)
}

export default Login
