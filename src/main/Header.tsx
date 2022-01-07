export const Header = () => {
  return (
    <header className="w-full bg-gray-50 flex justify-between py-4">
      <a className="px-2 flex">
        <img
          width={50}
          src="./assets/images/book.jpg"
          alt=""
          className="px-2"
        />{" "}
        Book Lottery
      </a>
      <a href="./auth" className="px-2">
        logout
      </a>
    </header>
  );
};
