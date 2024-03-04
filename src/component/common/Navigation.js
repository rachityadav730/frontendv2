/* eslint-disable indent */
import * as ROUTE from '../../constants/routers';
import React, { useEffect, useRef } from 'react';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import { useSelector } from "react-redux"

const Navigation = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();
  const {total, totalItems} = useSelector((state) => state.cart) 
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

  console.log("read values ROUTE", total,totalItems)
  return (
    <div className="">
  <div className="nav_container">
    <div className="mainNavBar">
        <div className='mt-10'>
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
                <input type="text" name="" placeholder="Search for..." class="search__field"></input>
                <button type="submit" class="fa fa-search search__icon"></button>
              {/* <input class="search__input" type="text" placeholder="Search"></input> */}
            {/* <input
                className=" "
                placeholder="Search by product, category or collection"
                type="text"
                autoComplete="off"
            /> */}
            <i className="icon_search" />
            </form>
            <div className="seperator" />
        </div>
        <div className='mto-5' style={{display: "flex"}}>
            
            <div
                className=""
                style={{
                display: "flex",
                alignItems: "baseline",
                textAlign: "right",
                cursor: "pointer",
                color: "black"
                }}
            >
                <a href="/cart_item" id="loginLink" className="loginLink" style={{position: "relative",marginBlock: "auto"}}>
                  <i class="fa fa-shopping-cart ft-size"> </i>
                </a>
                <span className='cart-pop-up'>
                  <span style={{paddingRight: "5px"}}>
                  {totalItems}
                  </span>
                </span>

            </div>
            <div style={{marginLeft: "7px"}}>
              <p style={{marginBottom: "6.5px"}}> 
                </p>
                <h4 ><a href="/signin" style={{color: "#663399"}}>Login</a></h4>
            </div>
        </div>
        
        </div>
        
    </div>
  </div>
</div>

  );
};

export default Navigation;
