import "./App.css";
import Auth from "./auth/Auth";
import Main from "./main/Main";
import { ToastContainer } from "react-toastify";
import { CookieHandler } from "./utils/cookie.class";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  if (!CookieHandler.getToken()) {
    navigate("/auth");
  }
  // else navigate("/");
  const onLoginSuccess = () => {
    if (CookieHandler.getToken()) navigate("/");
  };
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route
          path="/auth"
          element={<Auth onLoginSuccess={onLoginSuccess} />}
        ></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
