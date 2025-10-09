import React from "react";
import { Link } from "react-router";
import useApps from "../hooks/useApps";
import AppsCard from "./AppsCard";
import Container from "./Container";

const TrendingApps = () => {
  const { apps, loading } = useApps();

  // Sort apps by downloads in descending order and take the top 9
  const trendingApps = apps
    .sort((a, b) => {
      const downloadsA = parseInt(a.downloads.replace("M", ""));
      const downloadsB = parseInt(b.downloads.replace("M", ""));
      return downloadsB - downloadsA;
    })
    .slice(0, 9);

  return (
    <div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
              {trendingApps.map((app) => (
                <AppsCard key={app.id} app={app} />
              ))}
            </div>
          )}
        </div>
        {/* show all apps button */}
        <div className="text-center">
          <Link to={"/apps"} className="btn btn-primary rounded-full px-8">
            Show All Apps
          </Link>
        </div>
     </div>
  );
};

export default TrendingApps;
