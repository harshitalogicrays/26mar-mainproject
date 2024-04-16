import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CarItem from './CarItem'

const CarList = ({cars}) => {
  return (
    <Container>
        {cars.length==0 && <h1>No Car Found</h1>}
        <Row>
            {cars.map((car,i)=><CarItem key={car.id} car={car}/>)}
        </Row>
    </Container>
  )
}

export default CarList
