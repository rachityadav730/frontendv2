import React from 'react'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const EmailLogIn = () => {
  return (
    <div className='bg-yellow height-100 text-center'>
        <div>
            <div className='pd-tp-300'>
                <h1>
                    Log in to your account
                </h1>
                <Formik 
                initialValues={{ email: '',
                                 password: '' }}
                onSubmit={async(values, actions) => {
                    const API_URL = 'http://localhost:3000/login'
                    const user = {
                        email: values.email,
                        password: values.password
                    }
                    try {
                        const response = await axios.post(`${API_URL}`, { user });
                        return response.data;
                      } catch (error) {
                        throw error;
                      }
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    }, 1000);
                }}>
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                        <input
                            type="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            className='width-50 ht-40 pad-bt-30'
                            name="email"
                        />
                        <br/>
                        <input
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            className='width-50 ht-40 pad-bt-30'
                            name="password"
                        />
                        <br/>
                        <p>
                        Forgot Password?
                        </p>
                        {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                        <Button className='width-50 mar-tp-10' variant="success" type="submit">LOGIN</Button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default EmailLogIn