import { Login } from "./Login";
import { useState } from "react";
import { Signup } from "./Signup";

function Auth(props: any) {
  const [LoginPage, setLoginPage] = useState<boolean>(true);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 bg-1">
      {LoginPage ? (
        <Login onSignup={() => setLoginPage(false)} />
      ) : (
        <Signup onLogin={() => setLoginPage(true)} />
      )}
    </div>
  );
}

export default Auth;
