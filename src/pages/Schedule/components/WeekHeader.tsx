import {useState} from "react";
import {startOfWeek, addDays, format, isSameDay, isSunday} from "date-fns";
import {ru} from "date-fns/locale";
import {cn} from "@/lib/cn";

const WeekHeader = ({onDateSelect}: { onDateSelect: (date: Date) => void }) => {
    // 1. Определяем начало текущей недели (понедельник)
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, {weekStartsOn: 1});

    // 2. Генерируем массив из 6 дней (Пн - Сб)
    const weekDays = Array.from({length: 6}).map((_, index) => {
        return addDays(startOfCurrentWeek, index);
    });

    // 3. Состояние для выбранного дня
    // Если сегодня воскресенье (его нет в списке), выбираем понедельник по умолчанию
    const [selectedDate, setSelectedDate] = useState(() => {
        return isSunday(today) ? weekDays[0] : today;
    });

    // Обработчик клика
    const handleDayClick = (day: Date) => {
        setSelectedDate(day);
        if (onDateSelect) {
            onDateSelect(day);
        }
    };

    return (
        <div className="w-full flex gap-2">
            {weekDays.map((day) => {
                const isSelected = isSameDay(day, selectedDate);
                const dayName = format(day, "cccccc", {locale: ru});
                const dayNumber = format(day, "d");

                return (
                    <div key={day.toString()} className="flex flex-col w-full gap-2 items-center">
                        <p className="text-sm font-medium text-black">{dayName}</p>
                        <div
                            onClick={() => handleDayClick(day)}
                            className="cursor-pointer max-w-13.5 w-full h-25 rounded-full bg-custom-gray flex flex-col justify-between items-center pt-4 pb-2"
                        >
                            <div
                                className={cn("w-2 h-2 rounded-full bg-black", isSelected ? "opacity-100" : "opacity-40")}></div>

                            <div
                                className={cn(
                                    "w-10 h-10 rounded-full flex justify-center items-center",
                                    isSelected && "bg-custom-yellow"
                                )}
                            >
                                <p
                                    className={cn(
                                        "text-sm font-medium",
                                        isSelected ? "text-black" : "text-gray-600"
                                    )}
                                >
                                    {dayNumber}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default WeekHeader;
