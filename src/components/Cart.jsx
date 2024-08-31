import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItems } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="p-4 bg-gray-200 h-dvh">
      <h1 className="text-center text-2xl font-bold py-6">Cart</h1>
      <div className="bg-white w-6/12 mx-auto">
        <button
          className="p-2 m-2 border border-solid bg-red-700 text-white rounded-lg"
          onClick={() => dispatch(removeItems())}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && <h1>Please add items to the cart......</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
