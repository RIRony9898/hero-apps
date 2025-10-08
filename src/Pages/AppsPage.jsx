import React from "react";
import Container from "../Components/Container";
import useApps from "../hooks/useApps";
import AppsCard from "../Components/AppsCard";

const AppsPage = () => {
  const { apps, loading } = useApps();
  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Our All Applications</h2>
          <p className="text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        {/* found apps count and search box */}
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-semibold">
            All Apps{" "}
            <span className="text-lg text-gray-400">
              {"("}
              {apps.length}
              {")"}
            </span>
          </h5>
          {/* search box */}
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        {/* apps cards */}
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
              {apps.map((app) => (
                <AppsCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AppsPage;
