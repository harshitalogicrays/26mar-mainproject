import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Thankyou = () => {
  return (
    <div>
      <h1>Thank you for booking from us</h1>
      <Button as={Link} to='/'>Back to Home</Button>
    </div>
  )
}

export default Thankyou
