import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.initialize";

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);

  // google sign-in
  const signInWithGoogle = (location, redirectUriNavigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleLoggedInUser = result.user;
        setAuthError("");
        upsertUserToDb(
          googleLoggedInUser.email,
          googleLoggedInUser.displayName
        );
        setUser(googleLoggedInUser);
        const destination = location?.state?.from || "/";
        redirectUriNavigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  // logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        //
      })
      .catch((error) => {
        //
      })
      .finally(() => setIsLoading(false));
  };

  const upsertUserToDb = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://quiet-shelf-64321.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Admin select
  useEffect(() => {
    fetch(`https://quiet-shelf-64321.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return {
    user,
    admin,
    isLoading,
    authError,
    signInWithGoogle,
    logout,
  };
};

export default useFirebase;
