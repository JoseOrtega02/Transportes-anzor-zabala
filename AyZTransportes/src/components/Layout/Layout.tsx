import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
const NavbarLazy = React.lazy(() => import("../Navbar/Navbar"));
const FooterLazy = React.lazy(() => import("../Footer/Footer"));

export function Layout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavbarLazy />
        <Outlet />
        <FooterLazy />
      </Suspense>
    </>
  );
}

export default Layout;
