import { LogoutOutlined } from "@ant-design/icons";
import { CookieHandler } from "../utils/cookie.class";

export const Header = () => {
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
        href="./auth"
        onClick={() => CookieHandler.removeToken()}
        className="text-red-600 px-4 flex items-center"
      >
        <LogoutOutlined className="mx-2" />
        logout
      </a>
    </header>
  );
};
