import { Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import LotteryList from "./lottery-list/LotteryList";
import { Sidenav } from "./Sidenav";

function Main() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex flex-row">
        <Sidenav />
        <div className="inline bg-white overflow-x-hidden overflow-y-scroll">
          <Switch>
            <Route path="/lottery-list">
              <LotteryList />
            </Route>
            <Redirect to="/lottery-list" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Main;
