import {Outlet} from 'react-router-dom';
import Header from "@components/Header.tsx";
import BottomNavigation from "@components/BottomNavigation.tsx";

const Layout = () => {
    return (
        <div className="px-3">
            <Header/>
            <Outlet/>
            <BottomNavigation/>
        </div>
    );
}

export default Layout;
