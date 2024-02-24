import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const RootLayout = () => {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  );
};
export default RootLayout;
