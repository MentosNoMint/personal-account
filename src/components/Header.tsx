const Header = () => {
    return (
        <header className="w-full flex flex-col mb-5 mt-5">
            <div className="w-full flex justify-between">
                <div className="h-14.5 w-14.5 rounded-full bg-custom-gray flex justify-center items-center">
                    <img src="/assets/images/user.svg" className="w-4.5 h-4.5 opacity-50" alt="icon"/>
                </div>
                <div className="flex gap-2">
                    <div className="h-14.5 w-14.5 rounded-full bg-black flex justify-center items-center">
                        <img src="/assets/images/search.svg" className="w-4 h-4" alt="icon"/>
                    </div>
                    <div className="h-14.5 w-14.5 rounded-full bg-custom-gray flex justify-center items-center">
                        <img src="/assets/images/bell.svg" className="w-4 h-4 opacity-90" alt="icon"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;