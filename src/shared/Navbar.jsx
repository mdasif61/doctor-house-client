import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../public/images/doctorLogoOther.png";
import Container from "../Layout/Container";
import '../css/Navbar.css'

const Navbar = () => {
  useEffect(()=>{
   const nav=document.getElementById('navbar-bg');
    const handleScroll=()=>{
      const scrollTop=window.pageYOffset || document.documentElement.scrollTop;
      const isTop=scrollTop===0;
      if(isTop){
        nav.classList.remove('scrolled')
        nav.classList.add('nav-color')
      }
      else{
        nav.classList.add('scrolled');
        nav.classList.remove('nav-color')
      }
    }
    window.addEventListener('scroll',handleScroll)
  },[])

  return (
   <div id="navbar-bg" className={`h-20 fixed z-30 text-white w-full`}>
      <Container>
      <div className="flex bg-transparent h-20 justify-between items-center fixed text-white w-[1280px] p-5">
        <div>
          <img className="w-36" src={navLogo} alt="" />
        </div>
        <ul className="flex">
          <li className="mx-7">
            <Link>Home</Link>
          </li>
          <li className="mx-7">
            <Link>About</Link>
          </li>
          <li className="mx-7">
            <Link>Appointment</Link>
          </li>
          <li className="mx-7">
            <Link>Login</Link>
          </li>
        </ul>
      </div>
    </Container>
    </div>
  );
};

export default Navbar;
