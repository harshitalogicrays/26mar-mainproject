import React, { useEffect, useState } from 'react'
import BookingForm from './BookingForm';
import { selectTotalPrice } from '../redux/findCarSlice';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe("pk_test_51NOvqGSAvExKFAjaCl4fAxmf3CFJlq54guOtblHh0nEuB7XGZ9KXvKSgHgjjiIc0kexx4SUn67Z4iXDBB9q3fevA0096oZR8bw");


const BookingPayment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const amount=useSelector(selectTotalPrice)
    useEffect(() => {
        fetch("http://localhost:1000/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount:amount}),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
      }, []);
    
      const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };
    
      return (
        <div className="App">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <BookingForm />
            </Elements>
          )}
        </div>
      );
}

export default BookingPayment
