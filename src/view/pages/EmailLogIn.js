import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { currentUser } from '../../Slices/UserSlice';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';


const EmailLogIn = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const handleUser = (user) => {
        console.log("dispatching add to cart",user)
        dispatch(currentUser(user)); 
        return;
    }
  return (
    <div>
      <h1>Log in to your account</h1>
      <Formik 
        initialValues={{ email: '', password: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true); // Set submitting state to true before making the request
          const API_URL = 'http://localhost:3000/login';
          const user = {
            email: values.email,
            password: values.password
          };
          try {
            const response = await axios.post(API_URL, { user });
            console.log("Response:", response.data.status.data.user);
            if (response.data && response.data.status && response.data.status.data.user){
                let user = response.data.status.data.user
                const headers = response.headers;
                // Access specific header values
                const contentType = headers['content-type'];
                const authorization = headers['authorization'];
                localStorage.setItem("accessToken", response.data.status.token);
                localStorage.setItem("actualtoken", authorization);
                localStorage.setItem("contentType", contentType);
                console.log("sadfasdfasdf",response,headers,response.data.status.token)
                handleUser(user)
                navigate('/')
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

            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <TextField
              id="outlined-basic" 
              type="email"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.email}
              className='width-50 ht-40 pad-bt-30'
              name="email"
              label="Email"
              variant="outlined"
            />
            <br/>
            <div style={{marginBottom: "40px"}}>
            </div>

            <TextField
              id="outlined-basic" 
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              className='width-50 ht-40 pad-bt-30'
              name="password"
              label="Password"
              variant="outlined"
              style={{marginBottom: "20px"}}
            />

            {/* <input
              type="password"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              className='width-50 ht-40 pad-bt-30'
              name="password"
            /> */}
            <br/>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <Button className='width-50 mar-tp-10' variant="warning" type="submit">LOGIN</Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EmailLogIn;
