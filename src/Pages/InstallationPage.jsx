import React, { useContext } from "react";
import Container from "../Components/Container";
import { InstallationContext } from "../context/InstallationContext";
import { toast } from "react-toastify";
import { Download, Star } from "lucide-react";

const InstallationPage = () => {
  const { installedApps, uninstallApp } = useContext(InstallationContext);

  const handleUninstall = (appId, appName) => {
    uninstallApp(appId);
    toast.error(`${appName} uninstalled successfully!`);
  };

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
              ({installedApps.length})
            </span>
          </h5>
        </div>

        {/* installed apps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {installedApps.map((app) => (
            <div key={app.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={app.image} alt={app.title} className="h-48 object-cover w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{app.title}</h2>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Download size={16} />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={16} />
                    <span>{app.ratingAvg}</span>
                  </div>
                  <div>
                    <p>{app.size}</p>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="btn btn-error"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default InstallationPage;
