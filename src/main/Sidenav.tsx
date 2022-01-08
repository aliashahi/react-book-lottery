import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useEffect } from "react";

export const Sidenav = () => {
  return (
    <div className="!w-[250px] inline site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["lotteries"]}
        defaultOpenKeys={["dashboard"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="dashboard" title="Dashboard">
          <Menu.Item key="lotteries">Lotteries</Menu.Item>
          <Menu.Item key="explore">Explore</Menu.Item>
          <Menu.Item key="in_progress">In Progress</Menu.Item>
          <Menu.Item key="favorites">Favorites</Menu.Item>
          <Menu.Item key="archived">Archived</Menu.Item>
        </SubMenu>
        <SubMenu key="setting" title="Setting">
          <Menu.Item onClick={() => console.log("profile")} key="profile">
            Profile
          </Menu.Item>
          <Menu.Item onClick={() => console.log("about_us")} key="about_us">
            About Us
          </Menu.Item>
          <Menu.Item onClick={() => console.log("f_and_q")} key="f_and_q">
            F&Q
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};
