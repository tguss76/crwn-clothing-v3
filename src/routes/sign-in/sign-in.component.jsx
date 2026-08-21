import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglRedirect,
  signinWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const loadRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };

    loadRedirectResult();
  }, []);

  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <button onClick={signInWithGooglRedirect}>
        Sign in with google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
