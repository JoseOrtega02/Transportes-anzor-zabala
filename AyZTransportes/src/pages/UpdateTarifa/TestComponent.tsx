import React, { useContext } from "react";
import { AuthContext } from "./Auth/AuthProvider";

function TestComponent() {
  const user = useContext(AuthContext);
  return (
    <div>
      <button onClick={() => console.log(user)}>show user</button>
    </div>
  );
}

export default TestComponent;
