import React from 'react'
import { Button, Form, Image, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImg from '/src/assets/download.png'
import { FaAddressBook, FaArrowAltCircleLeft, FaCar, FaCarSide, FaHome, FaListAlt, FaLock, FaPenAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast } from 'react-toastify';
const Header = () => {
  const navigate=useNavigate()

  let handleLogout=()=>{
    signOut(auth).then(() => {
      toast.success("loggedOut successfully")
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });
  }
  return (
   <>
     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
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

            <Nav.Link as={Link} to='/login'><FaLock/> Login</Nav.Link>
            <Nav.Link as={Link} to='/register'><FaPenAlt /> Register</Nav.Link>

            <Nav.Link >Welcome Guest </Nav.Link>
            <Nav.Link as={Link} to='/'><FaListAlt/> My Orders</Nav.Link>
            <Nav.Link onClick={handleLogout}><FaArrowAltCircleLeft /> Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default Header
