import React from "react";
import logo from "../../dragon-news-resources-main/assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center ">
      <h3>This is from Header.jsx</h3>
      <img className="mx-auto w-[500px]" src={logo} />
      {/* <h2 className="font-bold text-4xl">The Dragon News</h2> */}
      <h2 className="text-2xl text-gray-400">
        Journalism Without Fear or feavour
      </h2>
      {/* <p className="text-2xl">Sunday,November 27,2025</p> */}
      <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      <hr />
    </div>
  );
};

export default Header;

// 11,268.972
// 11,232
// ---------------
// 13 ghonda 36SQF.
// 13.04279166666667
