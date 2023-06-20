import React, {useReducer} from 'react'
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from '../api.js';
import Navbar from './Navbar.js'
import BookingForm from './BookingForm.js'
import Footer from './Footer.js'

const BookingPage = () => {
     const navigate = useNavigate();

     const submitForm = (formData) => {
         const res = submitAPI(formData)
         if (res) {
            navigate("/booking-confirmed");
          }
     }

    const initializeTimes = () =>{
        const today = new Date()
        const availableTimes = fetchAPI(today)
        return availableTimes;
    }

    const updateTimes = (state, date) => {
        const today = new Date(date)
        const availableTimes = fetchAPI(today)
        return availableTimes;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes)


    return (
        <>
            <Navbar />
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submit={submitForm} />
            <Footer />
        </>
    )
}

export default BookingPage;

/**
 *
 */