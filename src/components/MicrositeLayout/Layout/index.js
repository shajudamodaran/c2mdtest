import React, { lazy } from "react";
import Style from "./Layout.module.scss";

const Header = React.lazy(() => import("../../MicrositeLayout/MicrositeHeader"));
const Footer = React.lazy(() => import("../../MicrositeLayout/MicrositeFooter"));

function MicrositeLayout({ children,clientDetails }) {
  return (
    <>
      <Header clientDetails={clientDetails}/>
      <div className={Style.Layout_body}>{children}</div>
      <Footer />
    </>
  );
}

export default MicrositeLayout;
