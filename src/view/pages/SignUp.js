import React, {useState, useEffect} from 'react'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import TextField from '@mui/material/TextField';

const SignUp = () => {
    const [mobile, setmobile] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  return (
    <div className='bg-yellow height-100 text-center'>
    <div>
        <div className='pd-tp-300'>
            <h1>
                Sign Up to your account
            </h1>
            <Formik 
            initialValues={{ 
                            name: '',
                            email: '',
                            password: '',
                            confirm_password: '' 
                            }}
            onSubmit={async (values, actions) => {
              const user = {
                name: values.name,
                email: values.email,
                password: values.password
            }
              try {
                setLoading(true);
                const response = await axios.post('http://localhost:3000/signup', {user});
                console.log('Response:', response.data);
                // Handle the response data as needed
              } catch (error) {
                console.error('Error:', error.message);
                setError(error);
              } finally {
                setLoading(false);
              }
            }}>

                {props => (
                    <form onSubmit={props.handleSubmit}>

                    <TextField
                        id="outlined-basic" 
                        type="text"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.name}
                        className='width-50 ht-40 pad-bt-30'
                        name="name"
                        label="Name"
                        variant="outlined"
                        style={{marginBottom: "20px"}}
                    />
                     <br/>
                    <div style={{marginBottom: "40px"}}>
                    </div>
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
                        style={{marginBottom: "20px"}}
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
                    <br/>
                    <div style={{marginBottom: "40px"}}>
                    </div>
                    <TextField
                        id="outlined-basic" 
                        type="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.confirm_password}
                        className='width-50 ht-40 pad-bt-30'
                        name="confirm_password"
                        label="Confirm password"
                        variant="outlined"
                        style={{marginBottom: "20px"}}
                    />
                    <br/>
                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                    <Button className='width-50 mar-tp-10' variant="success" type="submit">Sign Up</Button>
                    </form>
                )}
            </Formik>
        </div>
    </div>
</div>
  )
}

export default SignUp