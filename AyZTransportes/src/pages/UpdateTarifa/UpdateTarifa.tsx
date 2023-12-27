import React, { useEffect, useContext } from "react";
import { auth } from "../../firebase";
import { AuthContext, AuthProvider } from "./Auth/AuthProvider";
import Login from "./Auth/Login";
import TestComponent from "./TestComponent";

function UpdateTarifa() {
  return (
    <>
      <AuthProvider>
        <Login />
        <TestComponent />
      </AuthProvider>
    </>
  );
}

export default UpdateTarifa;
