import React from "react";
import { auth } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  async function login() {
    async function saveUserDataBase(
      userUID: string | null,
      userDisplayName: string | null
    ) {
      console.log("função add");
      console.log(userUID, userDisplayName);
      await axios
        .post("https://crazy-duck-baseball-cap.cyclic.app/addUser", {
          userUID,
          userDisplayName,
        })
        .then(console.log);
    }
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // Saves a user on the browser
        const user = result.user;
        localStorage.setItem("user", user.uid);

        if (user.displayName) {
          localStorage.setItem("userName", user.displayName);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

    const user = localStorage.getItem("user");
    const userName = localStorage.getItem("userName");
    if (user != null) {
      saveUserDataBase(user, userName);
      console.log("tou no if");
      return navigate("/");
    }
  }

  return (
    <div
      style={{
        backgroundImage: "url(/background.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col items-center justify-center"
    >
      <Button
        style="mt-96  bg-black bg-opacity-50 text-yellow-500"
        function={login}
      >
        Login com o Google
      </Button>
    </div>
  );
}
