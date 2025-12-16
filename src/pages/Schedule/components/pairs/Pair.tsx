const Pair = () => {
    return (
        <div className="w-full min-h-42 rounded-3xl bg-white px-5.5 py-5 flex flex-col">
            <p className="text-black font-medium text-base leading-4">Русский язык</p>
            <p className="text-black opacity-50 font-normal text-[15px]">Иванов И.И</p>
            <div className="flex gap-2 mt-auto">
                <div className="text-sm font-medium text-black bg-custom-yellow rounded-full py-2 px-4">10:00-11:25</div>
                <div className="text-sm font-medium text-black bg-custom-yellow rounded-full py-2 px-4">Ауд. 102</div>
            </div>
        </div>
    );
}

export default Pair;