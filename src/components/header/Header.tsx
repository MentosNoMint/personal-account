import NotificationBell from "@components/header/NotificationBell.tsx";
import Search from "@components/header/Search.tsx";

const Header = () => {
  return (
    <header className="w-full flex flex-col mb-2">
      <div className="bg-custom-gray px-3.5 py-3.5 w-full rounded-b-[2.25rem]">
        <div className="flex w-full h-16 gap-2">
          <Search />
          <NotificationBell />
        </div>
      </div>
    </header>
  );
};

export default Header;