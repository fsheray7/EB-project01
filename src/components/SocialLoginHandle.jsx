import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import googleIcon from "../assets/images/google.png";
import microsoftIcon from "../assets/images/microsoft.png";

/* ======================
   MICROSOFT CONFIG
====================== */
const msalConfig = {
  auth: {
    clientId: "YOUR_MICROSOFT_CLIENT_ID",
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

/* ======================
   MICROSOFT BUTTON
====================== */
function MicrosoftLoginButton({ text }) {
  const { instance } = useMsal();

  const handleMicrosoftLogin = () => {
    instance
      .loginPopup({ scopes: ["User.Read"] })
      .then((response) => {
        console.log("Microsoft Token:", response);
      })
      .catch(console.error);
  };

  return (
    <button
      type="button"
      onClick={handleMicrosoftLogin}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base 2xl:text-2xl font-medium hover:bg-gray-50 transition"
    >
      <img
        src={microsoftIcon}
        className="w-4 sm:w-5 h-4 sm:h-5 2xl:w-8 2xl:h-8"
        alt="Microsoft"
      />
      {text}
    </button>
  );
}

/* ======================
   MAIN SOCIAL LOGIN
====================== */
export default function SocialLogin({ mode = "login" }) {
  const isSignup = mode === "signup";

  const googleText = isSignup
    ? "Sign up with Google"
    : "Login with Google";

  const microsoftText = isSignup
    ? "Sign up with Microsoft"
    : "Login with Microsoft";

  /* GOOGLE LOGIN */
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Token:", tokenResponse);
      // backend bhejo
    },
    onError: () => {
      console.log("Google Login Failed");
    },
  });

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 2xl:gap-6">
      {/* GOOGLE */}
      <button
        type="button"
        onClick={() => googleLogin()}
        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base 2xl:text-2xl font-medium hover:bg-gray-50 transition"
      >
        <img
          src={googleIcon}
          className="w-4 sm:w-5 h-4 sm:h-5 2xl:w-8 2xl:h-8"
          alt="Google"
        />
        {googleText}
      </button>

      {/* MICROSOFT */}
      <MsalProvider instance={msalInstance}>
        <MicrosoftLoginButton text={microsoftText} />
      </MsalProvider>
    </div>
  );
}
