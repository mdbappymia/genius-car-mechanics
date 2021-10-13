import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setaUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const signInWithGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setaUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("SignOut");
        setaUser({});
      })
      .finally(() => setIsLoading(false));
  };
  //user obserbation change
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setaUser(user);
      } else {
        setaUser({});
      }
      setIsLoading(false);
    });
    return unsubcribed;
  }, []);
  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
  };
};
export default useFirebase;
