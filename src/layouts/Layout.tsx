import {Outlet} from 'react-router-dom';
import Header from "@components/header/Header.tsx";
import BottomNavigation from "@components/BottomNavigation.tsx";

const Layout = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="px-3 lg:max-w-250 w-full max-lg:pb-25">
        <Header />
        <Outlet />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Layout;
