import React from 'react'
import { FaCarSide } from 'react-icons/fa'
import { TbEngine, TbManualGearbox } from 'react-icons/tb'
import { PiEngineFill } from 'react-icons/pi'
import { BsCarFront, BsFillFuelPumpFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { selectAddToRent } from '../redux/rentSlice'
import { Col, Container, Row ,Button, ListGroup,Image, Form} from 'react-bootstrap'
const Rent = () => {
  const carrent=useSelector(selectAddToRent)
  return (
    <Container className='bg-light mt-5 shadow  p-3'>
      <h1 className='text-center'>Book Your Car</h1><hr/>
        <Row>
            <Col xs={6}>
                <Image src={carrent.images[0]} className='img-fluid'/>

                <Row className='mt-3'>
                <Form.Label>Choose Location</Form.Label>
                <Form.Select> 
                  <option selected disabled>select location</option>
                  {carrent.locations.map((loc,i)=><option key={i}>{loc}</option>)}
                </Form.Select>
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
            </Col>
            <Col xs={6}>
   <ListGroup variant="flush">
    <ListGroup.Item action>
      <FaCarSide size="2em" className="me-2" style={{marginTop: "-10px"}}/>
    <span className="fs-6">Brand & Model:</span> &nbsp;
       <span className="fs-5 fw-bold">{`${carrent.brand} / ${carrent.model}`}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <TbEngine size="2em" className="me-2" style={{marginTop: "-8px"}}/>
                                            <span className="fs-6">HP:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{carrent.power}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <TbManualGearbox size="2em" className="me-2" style={{marginTop: "-8px"}}/>
                                            <span className="fs-6">Gear Box:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{carrent.gearbox}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <BsCarFront size="2em" className="me-2" style={{marginTop: "-10px"}}/>
                                            <span className="fs-6">Body Type:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{carrent.body}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <BsFillFuelPumpFill size="2em" className="me-2" style={{marginTop: "-10px"}}/>
                                            <span className="fs-6">Fuel Type:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{carrent.fuel}</span>
                                        </ListGroup.Item> 
    </ListGroup>
  
      <Row className='mt-3'>
        <Col>
        <input type="radio" checked></input>
          <label className="form-label ms-2 me-5">With Fuel:</label>
          <label className="text-dark fw-bold">Price: {carrent.pricewf} </label>
        </Col>
        </Row><Row>
        <Col>
        <input type="radio"></input>
        <label className="form-label ms-2 me-4">Without Fuel:</label>
        <label className="text-dark fw-bold">Price: {carrent.pricewof} </label>
        </Col>
      </Row>

                                </Col>
        </Row>
        <div class="d-grid gap-2">
          <button
            type="button"
            name=""
            id=""
            class="btn btn-primary"
          >
            Book Now
          </button>
        </div>
        
   </Container>
  )
}

export default Rent
