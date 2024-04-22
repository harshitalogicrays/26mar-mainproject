import React from 'react'
import useFetchCollection from '../../customhook/useFetchCollection'
import { Table } from 'react-bootstrap'

const Rentals = () => {
    const {data:bookings}=useFetchCollection("bookings")
  return (
    <>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>bookingID</th>
          <th>UserEmail</th>
          <th>Location</th>
          <th>Car Brand and Model</th>
          <th>Total Days</th>
          <th>Total Price</th>
          <th>Start Date and Time</th>
          <th>End Date and Time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bookings.length==0 &&   <tr><td colSpan={9}>No Booking Found</td></tr>}
        {bookings.map((book,i)=>
        <tr>
          <td>{book.id}</td>
          <td>{book.userEmail}</td>
          <td>{book.details.location}</td>
          <td> {book.car.model}({book.car.brand})</td>
          <td>{book.days}</td>
          <td>{book.amount}</td>
          <td>{book.details.sdate} at {book.stime}</td>
          <td>{book.details.edate} at {book.etime}</td>
          <td>
            
            <div class="mb-3">
                <select  >
                    <option value='' selected disabled>Select one</option>
                    <option>Confirm</option>
                    <option>Cancel</option>
                </select>
            </div>
            
          </td>
        </tr>
        )}
            </tbody>
    </Table>
    </>
  )
}

export default Rentals
