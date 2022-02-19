import React, { lazy } from "react";

const LoginLayout = React.lazy(() =>
  import("../components/Layout/LoginLayout")
);
const MobileDashboard = React.lazy(() =>
  import("../components/MobileDashboard")
);
function MobileDashboardPage() {
  return (
   
      <MobileDashboard />
    
  );
}

export default MobileDashboardPage;
