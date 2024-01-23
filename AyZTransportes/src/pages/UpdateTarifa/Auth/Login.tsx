import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth } from "../../../firebase";
import "./login.css";
export const logOut = async () => {
  const auth = await getAuth();
  signOut(auth);
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const auth = await getAuth();
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
      <h1>Login/Register</h1>
      <div className="inputBox">
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
        <div className="buttonBox">
          <button onClick={login} className="logIn">
            Login
          </button>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Login;
