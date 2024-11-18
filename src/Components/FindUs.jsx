import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="font-semibold mb-3 ">FinD US on</h3>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> FaceBook
        </button>
        <button className="btn join-item justify-start">
          <BsTwitter></BsTwitter> Twitter
        </button>
        <button className="btn join-item justify-start">
          <BsInstagram></BsInstagram> Instragam
        </button>
      </div>
    </div>
  );
};

export default FindUs;
