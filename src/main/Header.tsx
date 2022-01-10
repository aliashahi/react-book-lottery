import { LogoutOutlined } from "@ant-design/icons";
import { AlertService } from "../services/alert.service";
import { supabase } from "../services/supabase.client";
import { CookieHandler } from "../utils/cookie.class";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const logOut = async () => {
    await supabase.auth.signOut().then(({ error }) => {
      CookieHandler.removeToken();
      history.push("/auth");
      AlertService.Success("You Logged out successfully!");
    });
  };
  return (
    <header className="w-full bg-gray-50 flex justify-between py-4 sticky top-0 z-10">
      <a className="px-2 flex font-bold text-2xl text-black">
        <img
          width={50}
          src="./assets/images/book.jpg"
          alt=""
          className="px-2 "
        />
        Book Lottery
      </a>
      <a
        onClick={() => logOut()}
        className="text-red-600 px-4 flex items-center"
      >
        <LogoutOutlined className="mx-2" />
        logout
      </a>
    </header>
  );
};
