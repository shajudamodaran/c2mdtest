import React, { lazy } from "react";

const LoginLayout = React.lazy(() =>
  import("../components/Layout/LoginLayout")
);
const SpecialityListing = React.lazy(() =>
  import("../components/SpecialityListing")
);

function SpecialityPage() {
  return (
    <LoginLayout>
      <SpecialityListing />
    </LoginLayout>
  );
}

export default SpecialityPage;
