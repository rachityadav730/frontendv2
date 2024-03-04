import React,{useState, useEffect} from 'react';
import dashboard_img  from '../../images/dash_board.webp'

const Dashboard = () => {


  return (
    <div className="loader">
      <div className='dash-conatiner'>
      <a href="/shop" style={{ display: "inline-block", height: "inherit" }}>
            <img src={dashboard_img} alt="bewakoof_logo"
            title="Bewakoof.com"  />
            {" "}
        </a>
      </div>
     

    </div>
  );
};

export default Dashboard;
