import React,{useState, useEffect} from 'react';
import dashboard_img  from '../../images/dash_board.webp'

const Dashboard = () => {

  const[items, setItems] = useState([])

  useEffect(()=>{
    const token = localStorage.getItem("jwtToken");

    console.log("check its working",token)
    const API_URL = 'http://localhost:3000/api/v1/get_items'
    const response =  fetch(API_URL, {
      method: "GET", // or "POST", "PUT", etc.
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // Other request options (body, etc.) go here
    });

    
    // if (response.ok) {
    //   const data =  response.json();
    //   console.log("API response:", data);
    // } else {
    //   console.error("API request failed:", response.status);
    // }
  },[])
  return (
    <div className="loader">
      <div className='dash-conatiner'>
      <a href="/" style={{ display: "inline-block", height: "inherit" }}>
            <img src={dashboard_img} alt="bewakoof_logo"
            title="Bewakoof.com"  style={{marginLeft: "25%"}}/>
            {" "}
        </a>
      </div>
     

    </div>
  );
};

export default Dashboard;
