import { Header } from "./Header";
import { Sidenav } from "./Sidenav";

function Main() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex flex-row">
        <Sidenav />
        <div className="site-layout-background inline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt at neque
          est! Consequatur, error vitae, est animi sed, facere nihil commodi
          asperiores nobis repudiandae enim doloremque maxime officia
          accusantium et!
        </div>
      </div>
    </div>
  );
}

export default Main;
