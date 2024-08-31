import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UseContext from "../utils/UseContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  const { loggedIn } = useContext(UseContext);

  const cartItems = useSelector((store) => store.cart.items);
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
            <Link to="cart" className="text-lg font-bold">
              🛒 ({cartItems.length})
            </Link>
          </li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="text-xl font-bold">{loggedIn}🙋‍♂️</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
