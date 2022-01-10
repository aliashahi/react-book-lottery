import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useHistory } from "react-router-dom";

export const Sidenav = () => {
  let x: string = window.location.href.split("/").pop() ?? "lotteries";
  const history = useHistory();
  const Navigate = (url: string) => {
    history.push(url);
  };

  return (
    <div className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[x]}
        defaultOpenKeys={["dashboard"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="dashboard" title="Dashboard">
          <Menu.Item
            onClick={() => Navigate("/create-lottery")}
            key="create-lottery"
          >
            Create Lottery
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/lotteries")} key="lotteries">
            Lotteries
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/explore")} key="explore">
            Explore
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/in-progress")} key="in-progress">
            In Progress
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/favorites")} key="favorites">
            Favorites
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/archived")} key="archived">
            Archived
          </Menu.Item>
        </SubMenu>
        <SubMenu key="setting" title="Setting">
          <Menu.Item onClick={() => Navigate("/profile")} key="profile">
            Profile
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/about-us")} key="about_us">
            About Us
          </Menu.Item>
          <Menu.Item onClick={() => Navigate("/f-and-q")} key="f_and_q">
            F&Q
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};
