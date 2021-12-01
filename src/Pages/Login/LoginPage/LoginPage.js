import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const LoginPage = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const redirectUriNavigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, redirectUriNavigate);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "15vh",
        marginBottom: "15vh",
      }}
    >
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default LoginPage;
