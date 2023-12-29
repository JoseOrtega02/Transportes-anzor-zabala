import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase";
export const logOut = () => {
  signOut(auth);
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resetInput();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Login</h1>
      <div className="inputBox">
        <h3>Login/Register</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        <button onClick={login}>Login</button>
        <button onClick={logOut}>Log Out</button>
      </div>
    </>
  );
};

export default Login;
