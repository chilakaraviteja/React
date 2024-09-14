import React from "react";

const Contact = () => {
  return (
    <div className="text-center w-[500px] mx-auto p-12">
      <h1 className=" font-bold text-3xl">Contact Us Page</h1>
      <form className="flex flex-col py-8">
        <input
          type="text"
          className="p-2 border border-solid m-2"
          placeholder="Enter name"
        />
        <input
          type="text"
          className="p-2 border border-solid m-2"
          placeholder="Enter message"
        />
        <button className="border border-solid border-black bg-gray-200 font-bold uppercase p-2 m-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
