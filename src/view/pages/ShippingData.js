import React from 'react'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { currentUser } from '../../Slices/UserSlice';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
const ShippingData = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleUser = (user) => {
    console.log("dispatching add to cart",user)
    dispatch(currentUser(user)); 
    return;
  }
  return (
    <div className='product-dashboard'>
      <h1>Shipping Address</h1>
         <Formik 
        initialValues={{ 
          first_name: "",
          last_name: "",
          address1: '',
          city: '',          
          state_name: '',
          country: '',
          zip_code: '',
          phone_number: '',
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true); // Set submitting state to true before making the request
          const API_URL = 'http://localhost:3000/api/v1/addresses';
          const address_data = {
            first_name: values.first_name,
            last_name: values.last_name,
            address1: values.address1,
            city: values.city,          
            state_name: values.state_name,
            country: values.country,
            zip_code: values.zip_code,
            alternative_phone: values.phone_number,
          };
          try {

            const token = localStorage.getItem('accessToken');
            const headers = {
              'Content-Type': 'application/json', // Assuming JSON content type
              Authorization: `Bearer ${token}`, // Include Bearer token
            };            
            const response = await axios.post(API_URL, { address: address_data }, { headers });
            console.log("Response:", response.data.status.data.user);
            if (response.data && response.data.status && response.data.status.data.user){
                let data = response.data
                // navigate('/')
            }
           
            // Handle successful response, e.g., redirect user or display success message
          } catch (error) {
            console.error("Error:", error);
            // Handle error, e.g., display error message to the user
          } finally {
            setSubmitting(false); // Set submitting state back to false after request completes
          }
        }}
      >
        {props => (
          <form onSubmit={props.handleSubmit}>

          <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="first_name"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>


          <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="last_name"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>



            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="address1"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="city"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="state_name"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="country"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic"
              label="Zip/Postal Code"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="zip_code"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic"
              label="Mobile No"
              variant="outlined"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="phone_number"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>
            <br/>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <Button className='width-50 mar-tp-10' variant="warning" type="submit">Complete Checkout and Pay</Button>
            <div style={{marginBottom: "40px"}}>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default ShippingData