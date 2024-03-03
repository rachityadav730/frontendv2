import React, {useState, useEffect} from 'react'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import axios from 'axios';
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
                            name: 'Rachit Yadav',
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
                    <input
                        type="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.confirm_password}
                        className='width-50 ht-40 pad-bt-30'
                        name="confirm_password"
                    />
                    <br/>
                    <p>
                    Forgot Password?
                    </p>
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