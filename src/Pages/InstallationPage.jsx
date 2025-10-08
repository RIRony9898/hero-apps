import React from "react";
import Container from "../Components/Container";

const InstallationPage = () => {
  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Your Installed Apps</h2>
          <p className="text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* found apps count and search box */}
        <div className="flex justify-between items-center">
          <h5 className="text-2xl font-semibold">
            Installed Apps{" "}
            <span className="text-lg text-gray-400">
              {"("}0{/* {apps.length} */}
              {")"}
            </span>
          </h5>
          {/* sort button */}
          <div>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              Sort by Download
            </button>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
              <li>
                <a>Low -{`>`} High</a>
              </li>
              <li>
                <a>High -{`>`} Low</a>
              </li>
            </ul>
          </div>{" "}
        </div>
      </Container>
    </div>
  );
};

export default InstallationPage;
