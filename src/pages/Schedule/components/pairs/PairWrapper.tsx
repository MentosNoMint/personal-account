import Pair from "@/pages/Schedule/components/pairs/Pair.tsx";
import Switcher from "@/pages/Schedule/components/Switcher.tsx";
import {useState} from "react";

const PairWrapper = () => {
    const [mode, setMode] = useState('day');

    return (
        <div
            className="w-full bg-custom-gray rounded-[2.25rem] px-5 h-[calc(100dvh-9rem)] py-5 flex flex-col gap-4 sticky top-2">
            {/*<Switcher/>*/}
            <div className="flex flex-col gap-2 overflow-y-auto flex-1">
                <div className="w-full bg-[#414050] rounded-2xl justify-center  px-4 py-3.5">
                    <p className="text-white font-medium text-base">Среда</p>
                </div>
                <Pair/>
                <Pair/>
                <Pair/>
                <Pair/>
                <Pair/>
                <Pair/>
            </div>
        </div>
    );
}

export default PairWrapper;
