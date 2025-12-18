import Card from "@components/ui/Card.tsx";

const CurrentPair = () => {
    return (
        <div className="flex flex-col gap-3">
            {/*<div className="w-full flex gap-2 flex-1">*/}
            {/*    <div className="h-14.5 w-full bg-black rounded-full flex justify-center items-center">*/}
            {/*        <p className="text-white font-medium text-base">День</p>*/}
            {/*    </div>*/}
            {/*    <div className="h-14.5 w-full bg-[#f6f6f6] rounded-full flex justify-center items-center">*/}
            {/*        <p className="text-black font-medium text-base">Неделя</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Card classname="h-45 bg-custom-gray flex flex-col">
                <div className="flex flex-col">
                    <h1 className="text-black text-base font-medium leading-5.5">Русский язык</h1>
                    <p className="tesx-sm text-black/55 font-medium">Иванов И.И</p>
                </div>
                <div className="mt-auto flex gap-2">
                    <p className="bg-white rounded-full px-4 py-2 text-sm font-medium">8:30 - 10:00</p>
                    <p className="bg-white rounded-full px-4 py-2 text-sm font-medium">ауд. 305</p>
                </div>
            </Card>
        </div>
    );
}

export default CurrentPair;