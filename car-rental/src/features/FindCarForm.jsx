import React from 'react'
import { Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import findCar from '/src/assets/images/findcar.jpg'
import { FaLocationDot, FaMapLocation } from 'react-icons/fa6'
import {locations} from './locations.js'
const FindCarForm = () => {

  return (
    <Container className='col-10 shadow bg-light p-2 rounded' style={{marginTop:'-50px',zIndex:'9'}}>
      <h1 className='text-center text-white bg-info rounded'>Find Your Best Car Here</h1>
      <Row>
        <Col xs={2}>
            <Image src={findCar} className='img-fluid'></Image>
        </Col>
        <Col xs={10}> 
   <Form>
      <Row>
        <Col>
        <Form.Label>City</Form.Label>
         <InputGroup className="mb-3">
          <InputGroup.Text><FaLocationDot/></InputGroup.Text>                
            <input type="text" className='form-control' value="Ahmedabad" placeholder="location" />
          </InputGroup>
          <Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Location</Form.Label>
              <select className='form-select'>
                <option>select location</option>
                {locations.map((loc,i)=><option key={i}>{loc}</option>)}
              </select>
            </Form.Group>
          </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
                <input type="date"  min={new Date().toISOString().split('T')[0]} className='form-control' placeholder="start date" required />
              </Form.Group>
             
              <Form.Group className="mb-3">
              <Form.Label>Start Time</Form.Label>
                <input
                  className="form-control"
                  type="time"
                  placeholder="start time"
                  required
                />
              </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3">
        <Form.Label>End Date</Form.Label>
                <input type="date"  min={new Date().toISOString().split('T')[0]} className='form-control' placeholder="end date" required />
              </Form.Group>

              <Form.Group className="mb-3">
              <Form.Label>End Time</Form.Label>
                <input
                  className="form-control"
                  type="time"
                  placeholder="start time"
                  required
                />
              </Form.Group>

        </Col>
      </Row>
      <div class="d-grid gap-2">
                <button className="btn btn-info" type="submit">Find Car</button>

      </div>
      
          </Form>
        </Col>
      </Row>

    </Container>

  )
}

export default FindCarForm
