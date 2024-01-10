import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
const NavbarLazy = React.lazy(() => import("../Navbar/Navbar"));
const FooterLazy = React.lazy(() => import("../Footer/Footer"));

export function Layout() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarLazy />
      </Suspense>

      <Outlet />

      <Suspense fallback={<div>Loading...</div>}>
        <FooterLazy />
      </Suspense>
    </>
  );
}

export default Layout;
