import React from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between border border-b-2">
      <div>
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-10 space-x-12 ">
          <li>Online Status:{onlineStatus ? "✅" : "😡"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>
            <Link to="grocery">Grocery</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
