import "./App.css";
import Auth from "./auth/Auth";
import Main from "./main/Main";
import { ToastContainer } from "react-toastify";
import { CookieHandler } from "./utils/cookie.class";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  if (!CookieHandler.getToken()) {
    history.push("/auth");
  }
  const token = CookieHandler.getToken();
  // else navigate("/");
  return (
    <div className="w-screen h-screen">
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        {token ? "" : <Redirect to="/auth" />}
        <Route path="/*">
          <Main />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
