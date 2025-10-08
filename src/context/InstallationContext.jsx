
import { createContext, useEffect, useState } from "react";

export const InstallationContext = createContext(null);

export const InstallationProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps"));
    if (storedApps) {
      setInstalledApps(storedApps);
    }
  }, []);

  const installApp = (app) => {
    const newInstalledApps = [...installedApps, app];
    setInstalledApps(newInstalledApps);
    localStorage.setItem("installedApps", JSON.stringify(newInstalledApps));
  };

  const uninstallApp = (appId) => {
    const newInstalledApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(newInstalledApps);
    localStorage.setItem("installedApps", JSON.stringify(newInstalledApps));
  };

  const contextValue = {
    installedApps,
    installApp,
    uninstallApp,
  };

  return (
    <InstallationContext.Provider value={contextValue}>
      {children}
    </InstallationContext.Provider>
  );
};
