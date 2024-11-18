import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../dragon-news-resources-main/assets/user.png";
const Navber = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/carrier">Carrier</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <img src={userIcon} alt="userIcon" />
        <button className="btn btn-neutral rounded-xl ">Login</button>
      </div>
    </div>
  );
};

export default Navber;
