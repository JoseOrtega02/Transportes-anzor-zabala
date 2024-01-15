import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
const NavbarLazy = React.lazy(() => import("../Navbar/Navbar"));
const FooterLazy = React.lazy(() => import("../Footer/Footer"));

export function Layout() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarLazy />
        <Outlet />
        <FooterLazy />
      </Suspense>
    </>
  );
}

export default Layout;
