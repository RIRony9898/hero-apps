import React from "react";
import { Link } from "react-router";
import Container from "../Components/Container";
import TrendingApps from "../Components/TrendingApps";

const Home = () => {
  return (
    <div>
      <Container>
        {/* title & subtitle */}
        <div className="text-center mt-20">
          <h1 className="text-5xl md:text-7xl font-bold">
            We Build <br />{" "}
            <span className="font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="mt-4 text-gray-500 text-xl">
            At HERO Apps , we craft innovative apps designed to make everyday
            life simpler, smarter, and more exciting. <br /> Our goal is to turn
            your ideas into digital experiences that truly make an impact.
          </p>
        </div>
        {/* google app store and apple app store buttons */}
        <div className="flex flex-wrap justify-center mt-10 gap-5 gap-y-4">
          <Link
            to={"https://play.google.com/store/games?hl=en&pli=1"}
            target="_blank"
            className="btn btn-outline btn-primary rounded-full px-8"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/000000/google-play.png"
              alt="google play icon"
            />
            Google Play
          </Link>
          <Link
            to={"https://www.apple.com/app-store/"}
            target="_blank"
            className="btn btn-outline btn-primary rounded-full px-8"
          >
            <img
              src="https://img.icons8.com/ios-filled/24/000000/mac-os.png"
              alt="apple icon"
            />
            App Store
          </Link>
        </div>
        {/* banner section */}
        <div className="mt-20 flex justify-center">
          <img src="/src/assets/hero.png" alt="" />
        </div>
      </Container>
      {/* trusted user count banner */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center py-20">
        <Container>
          <h4 className="text-5xl font-bold">
          Trusted by Millions, Built for You
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-5 md:px-20">
          <div className="flex flex-col gap-4">
            <p>Total Downloads</p>
            <h3 className="text-6xl font-extrabold">29.6M</h3>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Total Reviews</p>
            <h3 className="text-6xl font-extrabold">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Active Apps</p>
            <h3 className="text-6xl font-extrabold">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
        </Container>
      </div>
      {/* Trending Apps Section */}
      <Container>
        <div className="my-20">
          {/* trending apps title & subtitle */}
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold">Trending Apps</h2>
            <p className="text-xl mt-2">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          {/* trending apps cards */}
          <TrendingApps />
        </div>
      </Container>
    </div>
  );
};

export default Home;
