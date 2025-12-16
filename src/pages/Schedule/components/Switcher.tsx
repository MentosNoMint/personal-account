const Switcher = () => {
    return (
        <div className="w-full flex gap-2 h-14 rounded-full bg-white">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-custom-yellow">
                <p className="text-black text-base font-medium">День</p>
            </div>
            <div className="w-full h-full rounded-full flex items-center justify-center">
                <p className="text-black text-base font-medium">Неделя</p>
            </div>
        </div>
    );
};

export default Switcher;