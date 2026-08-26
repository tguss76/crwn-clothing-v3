import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglRedirect,
  signinWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-in-form/sign-in-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
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
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
;
