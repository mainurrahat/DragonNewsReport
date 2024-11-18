import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navber from "../Components/Navber";
import LeftNavber from "../Components/LayoutComponents/LeftNavber";
import RightNavber from "../Components/LayoutComponents/RightNavber";
const HomeLayout = () => {
  return (
    <div>
      <h2>This is from Home layout</h2>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navber></Navber>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid grid-cols-12">
        <aside className="col-span-3">
          <LeftNavber></LeftNavber>
        </aside>
        <aside className="col-span-6">
          {" "}
          <Outlet></Outlet>
        </aside>
        <aside className="col-span-3">
          <RightNavber></RightNavber>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
