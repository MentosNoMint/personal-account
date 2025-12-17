import Card from "@components/ui/Card.tsx";

const CurrentPair = () => {
    return (
        <>
            {/*<div className="w-full flex gap-2 flex-1">*/}
            {/*    <div className="h-14.5 w-full bg-black rounded-full flex justify-center items-center">*/}
            {/*        <p className="text-white font-medium text-base">День</p>*/}
            {/*    </div>*/}
            {/*    <div className="h-14.5 w-full bg-[#f6f6f6] rounded-full flex justify-center items-center">*/}
            {/*        <p className="text-black font-medium text-base">Неделя</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Card classname="h-50 bg-custom-gray">
                <p className="text-black text-base font-medium">Текущая пара</p>
            </Card>
        </>
    );
}

export default CurrentPair;