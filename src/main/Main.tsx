import { Redirect, Route, Switch } from "react-router-dom";
import CreateLottery from "./create-lottery/CreateLottery";
import { Header } from "./Header";
import LotteryList from "./lottery-list/LotteryList";
import { Sidenav } from "./Sidenav";

function Main() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="grid grid-cols-5">
        <Sidenav />
        <div className="col-span-4 inline !w-[100vw-250px] bg-white overflow-x-hidden overflow-y-scroll">
          <Switch>
            <Route path="/lottery-list">
              <LotteryList />
            </Route>
            <Route path="/create-lottery">
              <CreateLottery />
            </Route>
            <Redirect to="/lottery-list" />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Main;
