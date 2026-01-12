import { useState, useMemo } from "react";
import { getDay } from "date-fns";
import PairCard from "@components/ui/cards/PairCard";
import DateSelector from "@/pages/Schedule/components/DateSelector";
import {scheduleMockData} from "@/constants";


const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Эмуляция "умного" распределения пар по дням недели
  const currentDayLessons = useMemo(() => {
    // getDay возвращает число: 0 - Вс, 1 - Пн, ..., 6 - Сб
    const dayOfWeek = getDay(selectedDate);

    // Логика отображения:
    switch (dayOfWeek) {
      case 1: // Понедельник
      case 3: // Среда
      case 5: // Пятница
        return scheduleMockData; // Показываем все пары

      case 2: // Вторник
      case 4: // Четверг
              // Показываем только первые две пары (для примера разнообразия)
        return scheduleMockData.slice(0, 2);

      case 6: // Суббота
      case 0: // Воскресенье
      default:
        return []; // Выходные
    }
  }, [selectedDate]);

  return (
    <div className="flex flex-col gap-2">
      {/* Выбор даты */}
      <DateSelector
        selectedDate={selectedDate}
        onSelect={setSelectedDate}
      />

      {/* Список пар */}
      <div className="flex flex-col gap-1.5 min-h-[200px]">
        {currentDayLessons.length > 0 ? (
          <div className="flex flex-col gap-2">
            {currentDayLessons.map((lesson) => (
              <PairCard
                key={lesson.id}
                name={lesson.subject}
                cab={lesson.cabinet}
                teacher={lesson.teacher}
                time={lesson.time}
              />
            ))}
          </div>
        ) : (
          <div className="py-10 flex flex-col items-center justify-center text-gray-400 gap-2">
            <span className="text-4xl">😴</span>
            <p>Нет пар</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
