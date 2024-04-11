import React, { useEffect } from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from '/src/assets/download.png'
import { FaAddressBook, FaArrowAltCircleLeft, FaCar, FaCarSide, FaHome, FaListAlt, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logoutuser, selectUserName, selectUserRole } from '../redux/authSlice';
import { doc, getDoc } from 'firebase/firestore';
import { Logout, ShowOnLogIn, ShowOnLogout } from './hiddenlinks';
const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()


  useEffect(()=>{
    onAuthStateChanged(auth, async(user) => {
      if (user) {
          const uid = user.uid;
            //loginuser 
            const docRef=doc(db,"users",uid)
            const docSnap=await getDoc(docRef)
            let obj={name:docSnap.data().username,email:docSnap.data().email,
            role:docSnap.data().role,id:uid}
            dispatch(loginuser(obj))
        } else {
          //logout
          dispatch(logoutuser())
        }
    });
  },[auth])

  const username=useSelector(selectUserName)
  const userrole=useSelector(selectUserRole)
  return (
   <>
     <Navbar expand="lg" bg="light" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="">
            <Image src={logoImg} height={40} width={40} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' 
             style={({ isActive}) => {
                return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "white"
                };
            }}><FaHome/> Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <NavDropdown title="Cars" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><FaCar/> Manual</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                <FaCarSide/>Automatic
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact'><FaAddressBook/> contact us</Nav.Link>
          </Nav>
            {userrole=="0"  &&
          <Nav  className="me-auto">
            <Link to='/admin'  type="button"  class="btn btn-primary"  >
              Admin Panel
            </Link>
            
          </Nav>
}
          <Form>
            <InputGroup>
            <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />            
            <Button type="submit" variant='danger'><FaSearch/></Button>
            </InputGroup>
      </Form> 
          <Nav>
          <Nav.Link as={Link} to='/'><FaShoppingCart size={30}/>
            <span class="badge rounded-pill text-bg-danger">0</span >
            
          </Nav.Link>
            <ShowOnLogout>
                <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
                <Nav.Link as={Link} to='/register'><FaPenAlt /> Register</Nav.Link>
            </ShowOnLogout>
            <ShowOnLogIn>
                <Nav.Link >Welcome {username ? <>{username}</>:"Guest"} </Nav.Link>
                <Nav.Link as={Link} to='/'><FaListAlt/> My Orders</Nav.Link>
                <Nav.Link ><Logout/></Nav.Link>
            </ShowOnLogIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
