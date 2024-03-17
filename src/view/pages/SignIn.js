import React, {useState, useEffect} from 'react'
import axios from 'axios';
import login_image  from '../../images/login.webp'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import EmailLogIn from './EmailLogIn'

const SignIn = () => {
    const [mobile, setmobile] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const sendOtp = async() =>{
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3000/api/v1/send_otp', mobile);
            console.log('Response:', response.data);
            // Handle the response data as needed
          } catch (error) {
            console.error('Error:', error.message);
            setError(error);
          } finally {
            setLoading(false);
          }
    }
  return (
    <div className='log-in-container'>
        <div className='width-50 bg-yellow pd-tl-10 height-100'> 
          <div>
            <h1>
            Welcome to the world of Bewakoof®!
            </h1>
          </div>
          <div>
            <img src={login_image}/>
          </div>
        </div>
        <div className='width-50 mar-auto' >
          <div className='text-center'>
            <h1 className='pad-bt-30'>Log in / Sign up</h1>
            <p class="login-text pad-bt-30">for Latest trends, exciting offers and everything Bewakoof<span class="tradeMark">®</span>!</p>

            <EmailLogIn/>
            {/* <form> */}
              {/* <div className='pad-bt-30'>
              <input className='width-50 ht-40' value = {mobile} onChange={(e)=>setmobile(e.target.value)} placeholder='MobileNumber'/>
              </div>
              <div>
              <Button onClick={sendOtp}  style={{backgroundColor: "#42a2a2", border: "none", width: "50%", height: "60px", fontSize: "30px"}}>Continue</Button>{' '}
              </div> */}
            {/* </form> */}
          </div>
          <hr/>
          <div>

          {/* <Button variant="warning" style={{border: "none",marginLeft: "25%", width: "50%", height: "60px", fontSize: "25px"}} onClick={() =>{navigate('/email_log_in')}} >CONTINUE WITH EMAIL </Button>{' '} */}
          <Button variant="dark" className='mar-tp-10' style={{border: "none",marginLeft: "25%", width: "50%", height: "60px", fontSize: "25px"}} onClick={() =>{navigate('/signup')}}>Sign Up </Button>{' '}



          </div>
            
        </div>
    </div>
  )
}

export default SignIn