import React from 'react'
import { Col, Container, Form, Image, Row } from 'react-bootstrap'
import findCar from '/src/assets/images/findcar.jpg'
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
        <Form.Group className="mb-3">
                <input type="text" className='form-control' placeholder="From address" />
              </Form.Group>

              <Form.Group className="mb-3">
                <input type="text" className='form-control' placeholder="To address" />
              </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3">
                <input type="date" className='form-control' placeholder="Journey date" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <input
                  className="form-control"
                  type="time"
                  placeholder="Journey time"
                  required
                />
              </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3">
                <select className='form-select'>
                  <option value="wf">With Fuel</option>
                  <option value="wof">Without Fuel</option>
                </select>
              </Form.Group>

              <Form.Group className="mb-3">
                <button className="btn btn-primary">Find Car</button>
              </Form.Group>
        </Col>
      </Row>
          </Form>
        </Col>
      </Row>

    </Container>

  )
}

export default FindCarForm
