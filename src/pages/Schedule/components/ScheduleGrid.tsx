import {useMemo} from "react";
import {cn} from "@/lib/cn"; // Убедись, что путь к cn правильный

// --- НАСТРОЙКИ ---
const START_HOUR = 8;
const END_HOUR = 18;

// 1 час = 4.5rem (примерно 72px).
// Это удобнее, так как rem зависит от базового шрифта (обычно 16px).
const HOUR_HEIGHT_REM = 4.5;

// МАКСИМУМ визуальной высоты в часах (для "сплющивания" длинных пар)
const MAX_VISUAL_HOURS = 1;

export interface ScheduleEvent {
    id: string;
    title: string;
    subtitle?: string;
    startTime: string;
    endTime: string;
    color: string;
    cabinet: string;
}

interface ScheduleGridProps {
    events: ScheduleEvent[];
    className?: string;
}

const ScheduleGrid = ({events, className}: ScheduleGridProps) => {
    // Генерируем массив часов [8, 9, ..., 18]
    const hours = useMemo(() => {
        return Array.from({length: END_HOUR - START_HOUR + 1}, (_, i) => START_HOUR + i);
    }, []);

    // 1. Вычисляем отступ сверху в REM
    const getTopOffsetRem = (timeString: string) => {
        const [h, m] = timeString.split(":").map(Number);
        // Смещение в часах * высоту часа в rem
        return ((h - START_HOUR) + m / 60) * HOUR_HEIGHT_REM;
    };

    // 2. Вычисляем высоту в REM с ограничением
    const getEventHeightRem = (start: string, end: string) => {
        const [startH, startM] = start.split(":").map(Number);
        const [endH, endM] = end.split(":").map(Number);

        // Реальная длительность в часах
        const duration = (endH + endM / 60) - (startH + startM / 60);

        // Логика "сплющивания": берем минимум между реальностью и лимитом
        return Math.min(duration, MAX_VISUAL_HOURS) * HOUR_HEIGHT_REM;
    };

    return (
        <div className={cn("w-full relative py-[1rem]", className)}>
            {/* --- СЛОЙ 1: ФОНОВАЯ СЕТКА --- */}
            <div className="flex flex-col select-none">
                {hours.map((hour) => (
                    <div
                        key={hour}
                        // Задаем высоту явно в rem
                        style={{height: `${HOUR_HEIGHT_REM}rem`}}
                        className="flex items-start w-full relative group"
                    >
                        {/* Время (слева) */}
                        <span
                            className="w-[3rem] text-[0.7rem] font-medium text-gray-400 -mt-[0.6rem] text-right pr-[0.75rem]">
                            {hour}:00
                        </span>

                        {/* Линия (основа) */}
                        <div className="flex-1 h-full border-t border-gray-200/75 w-full relative">
                            {/* Пунктир для получаса (опционально) */}
                            <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-gray-50/60"/>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- СЛОЙ 2: СОБЫТИЯ --- */}
            {/* left-[3rem] соответствует ширине колонки времени w-[3rem] */}
            <div className="absolute top-4 right-0 left-12 bottom-0">
                {events.map((event) => {
                    const topRem = getTopOffsetRem(event.startTime);
                    const heightRem = getEventHeightRem(event.startTime, event.endTime);

                    return (
                        <div
                            key={event.id}
                            style={{
                                top: `${topRem}rem`,
                                height: `${heightRem}rem`,
                            }}
                            className={cn(event.color, "absolute rounded-full z-10 w-full flex justify-between items-center pl-6 pr-1 py-1")}
                        >
                            <div className="flex flex-col gap-0.5 justify-center w-full max-w-26">
                                <p className="text-sm font-medium text-black leading-4 text-center w-full break-words">
                                    {event.title}
                                </p>
                                <p className="text-xs font-normal text-black/50 text-center w-full">
                                    ауд. {event.cabinet}
                                </p>
                            </div>
                            <div className="flex h-full items-center gap-2">
                                <div
                                    className="w-6.5 h-6.5 rounded-full bg-white flex justify-center items-center text-sm font-medium text-black">
                                    {event.id}
                                </div>
                                <div
                                    className="bg-white/30 h-full rounded-full border border-white flex justify-center items-center px-4">
                                <span
                                    className="text-sm text-black font-medium shrink-0">{event.startTime} - {event.endTime}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScheduleGrid;
