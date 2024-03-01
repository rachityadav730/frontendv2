/* eslint-disable indent */
import * as ROUTE from '../../constants/routers';
import React, { useEffect, useRef } from 'react';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  console.log("read values ROUTE", ROUTE)
  return (
    <div className="">
  <div className=" ">
    <div className="mainNavBar">
        <div>
        <a href="/" style={{ display: "inline-block", height: "inherit" }}>
            <img
            src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
            alt="bewakoof_logo"
            title="Bewakoof.com"
            style={{
                height: 20,
                verticalAlign: "middle",
                marginBottom: 5,
                width: 147
            }}
            />{" "}
        </a>
        </div>
        
        <div className='subNavBar'>
        <div className="searchbox_div">
            <form
            className=""
            style={{ position: "relative", borderBottom: "none" }}
            >
            <input
                className=" "
                placeholder="Search by product, category or collection"
                type="text"
                autoComplete="off"
            />
            <i className="icon_search" />
            </form>
            <div className="seperator" />
        </div>
        <div className="">
            
            <div
                className=""
                style={{
                display: "flex",
                alignItems: "baseline",
                textAlign: "right"
                }}
            >
                <a href="/signin" id="loginLink" className="loginLink">
                Login
                </a>
            </div>
        </div>
        
        </div>
        
    </div>
  </div>
</div>

  );
};

export default Navigation;
