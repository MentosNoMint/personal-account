const Header = () => {
    return (
        <div className="w-full border border-[#EBEAED] h-22 rounded-3xl flex items-center px-2 mt-5 justify-between mb-4">
            <img src="/assets/images/logo.svg" alt="logo" className="w-53 h-13.5"/>
            <div className="w-11 h-11 rounded-full bg-custom-gray flex justify-center items-center mr-4 cursor-pointer">
                <img src="/assets/images/bell.svg" alt="bell" className="w-4 h-4"/>
            </div>
        </div>
    );
};

export default Header;