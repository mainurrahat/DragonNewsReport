import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-6 mt-16 bg-slate-400 py-4 px-14 items-center border-2 w-fit mx-auto rounded-2xl  ">
      {/* <h2>This is from latestNews.jsx</h2> */}
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          <p>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
