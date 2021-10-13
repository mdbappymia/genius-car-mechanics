import React from "react";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <div onClick={signInWithGoogle} className="btn btn btn-primary">
        Google Sign In
      </div>
    </div>
  );
};

export default Login;
