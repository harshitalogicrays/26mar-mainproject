import React, { useState } from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { FaLock, FaPenSquare } from 'react-icons/fa'
import LoginImg from '/src/assets/login.png'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { toast } from 'react-toastify'
import { Timestamp, doc, getDoc, setDoc } from 'firebase/firestore'
import Loader from './Loader'
import { useSelector } from 'react-redux'
import { selectURL } from '../redux/rentSlice'

const Login = () => {
  const redirect=useNavigate()
  let initialState={email:'',password:''}
  let [user,setUser]=useState({...initialState}) //state object
  let [isLoading,setIsLoading]=useState(false)

  let previousURL=useSelector(selectURL)
  let redirectURL=()=>{
    if(previousURL.includes('rent')){
      redirect('/rent')
    }
    else {
      redirect('/')
    }
}



  let handleSubmit=(e)=>{
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then(async(userCredential) => {
      const user1 = userCredential.user;
      try{
        const docRef=doc(db,"users",user1.uid)
        const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
          // console.log(docSnap.data().role)
          let role=docSnap.data().role
          if(role=='0'){
            toast.success('loggedIn Successfully')
            redirect('/admin')
          }
          else if(role=="1"){
            toast.success('loggedIn Successfully')
            // redirect('/')
            redirectURL()
          }
        }
        setIsLoading(false)
      }
      catch(error){
        setIsLoading(false)
        toast.error(error.message)
      }
      
    })
    .catch((error) => {
      setIsLoading(false)
     toast.error(error.message)
    });
    }
  
    const provider = new GoogleAuthProvider();
    let loginWithGoogle=()=>{
      signInWithPopup(auth, provider)
      .then(async(result) => {
          const user = result.user;
          let obj={username:user.displayName,email:user.email,role:"1",createdAt:Timestamp.now().toMillis()}
          try{
            const docRef=doc(db,"users",user.uid)
             await setDoc(docRef,obj)
             toast.success('loggedIn Successfully')
              // redirect('/')
              redirectURL()
          }
          catch(error){
            toast.error(error.message)
          }                   
      }).catch((error) => {
        toast.error(error.message)
      });
    }
  return (
    <>
      <Container className='mt-5 shadow p-2'>
        {isLoading && <Loader/>}
        <h1><FaLock/> Login Here</h1>
        <hr/>
            <Row>
              <Col xs={6}><Image src={LoginImg} fluid/> </Col>
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
