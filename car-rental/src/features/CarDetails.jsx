import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectcars } from '../redux/carSlice'
import { Col, Container, Row ,Button, ListGroup} from 'react-bootstrap'
import ImageThumbnail from './ImageThumbnail'
import { FaCarSide } from 'react-icons/fa'
import { TbEngine, TbManualGearbox } from 'react-icons/tb'
import { PiEngineFill } from 'react-icons/pi'
import { BsCarFront, BsFillFuelPumpFill } from 'react-icons/bs'

const CarDetails = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const allcars=useSelector(selectcars)
    const car=allcars.find(item=>item.id==id)
  return (
    <Container className='bg-light mt-5 shadow  p-3'>
        <Row>
            <Col xs={6}>
                <ImageThumbnail images={car.images}/>
            </Col>
            <Col xs={6}>
   <ListGroup variant="flush">
    <ListGroup.Item variant="secondary" action>
      <FaCarSide size="2em" className="me-2" style={{marginTop: "-10px"}}/>
    <span className="fs-6">Brand & Model:</span> &nbsp;
       <span className="fs-5 fw-bold">{`${car.brand} / ${car.model}`}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <TbEngine size="2em" className="me-2" style={{marginTop: "-8px"}}/>
                                            <span className="fs-6">HP:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{car.power}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <TbManualGearbox size="2em" className="me-2" style={{marginTop: "-8px"}}/>
                                            <span className="fs-6">Gear Box:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{car.gearbox}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <BsCarFront size="2em" className="me-2" style={{marginTop: "-10px"}}/>
                                            <span className="fs-6">Body Type:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{car.body}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item action>
                                            <BsFillFuelPumpFill size="2em" className="me-2" style={{marginTop: "-10px"}}/>
                                            <span className="fs-6">Fuel Type:</span> &nbsp;
                                            <span className="fs-5 fw-bold">{car.fuel}</span>
                                        </ListGroup.Item> 
                                    </ListGroup>

                                    <div className="text-end">
                                        <span className={`text-secondary fst-italic ${car.count > 0 ? "text-success" : "text-danger"}`}>
                                            Available Stock: {car.count}
                                        </span>
                                    </div>
                                </Col>
        </Row>
   </Container>
  )
}

export default CarDetails
