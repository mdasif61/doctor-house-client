import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../../public/images/doctorLogoOther.png";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <Container>
      <div className="flex justify-between fixed z-30 text-white w-[1280px] p-5">
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
  );
};

export default Navbar;
