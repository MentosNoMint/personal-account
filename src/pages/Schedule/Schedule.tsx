// Schedule.tsx
import {useState} from "react";
import WeekHeader from "@/pages/Schedule/components/WeekHeader";
import ScheduleGrid from "@/pages/Schedule/components/ScheduleGrid";
import {format} from "date-fns";
import type {ScheduleEvent} from "@/types";

const MOCK_EVENTS: Record<string, ScheduleEvent[]> = {
    "2025-12-18": [
        {
            id: "1",
            title: "Литература",
            startTime: "08:30",
            endTime: "10:00",
            color: "bg-[#F2F2F2]",
            cabinet: "202",
        },
        {
            id: "2",
            title: "Русский язык",
            startTime: "11:00",
            endTime: "12:30",
            color: "bg-[#F2F2F2]",
            cabinet: "102",
        },
        {
            id: "3",
            title: "Разработка баз данных",
            startTime: "15:00",
            endTime: "17:00",
            color: "bg-[#F2F2F2]",
            cabinet: "405",
        }
    ],
    "2025-12-19": [
        {
            id: "1",
            title: "Литература",
            startTime: "08:30",
            endTime: "12:00",
            color: "bg-[#F2F2F2]",
            cabinet: "202",
        },
        {
            id: "2",
            title: "Русский язык",
            startTime: "13:00",
            endTime: "14:30",
            color: "bg-[#F2F2F2]",
            cabinet: "102",
        },
        {
            id: "3",
            title: "Разработка баз данных",
            startTime: "16:50",
            endTime: "18:00",
            color: "bg-[#F2F2F2]",
            cabinet: "405",
        }
    ]
};

const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const dateKey = format(selectedDate, "yyyy-MM-dd");
    const currentEvents = MOCK_EVENTS[dateKey] || [];

    return (
        <div className="flex flex-col max-w-md mx-auto bg-white min-h-screen">
            <div className="w-full flex justify-between mb-5 px-2">
                <p className="text-black font-medium text-2xl">Расписание</p>
                {/*<div className="flex gap-1 h-14.5 w-29 bg-custom-gray rounded-full items-center justify-between px-3">*/}
                {/*    <img src="/assets/images/arrow.svg" className="w-5 h-5 opacity-90 rotate-180" alt="icon"/>*/}
                {/*</div>*/}
            </div>
            <WeekHeader onDateSelect={setSelectedDate}/>

            <div className="mt-6">
                <ScheduleGrid events={currentEvents}/>
            </div>
        </div>
    );
}

export default Schedule;
