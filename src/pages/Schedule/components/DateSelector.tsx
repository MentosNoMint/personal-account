import { format, addDays, isSameDay, startOfWeek } from "date-fns";
import { ru } from "date-fns/locale";
import Card from "@components/ui/cards/Card";

interface DateSelectorProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
}

const DateSelector = ({ selectedDate, onSelect }: DateSelectorProps) => {
  const currentWeekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 6 }).map((_, i) =>
    addDays(currentWeekStart, i)
  );

  return (
    <Card>
      <p className="text-black text-base font-medium">Выбрать дату</p>
      <div className="w-full h-18 bg-white rounded-3xl flex gap-2 items-center px-2 overflow-x-auto mt-3 scrollbar-hide lg:justify-center">
        {weekDays.map((day) => {
          const isSelected = isSameDay(day, selectedDate);

          return (
            <button
              key={day.toString()}
              onClick={() => onSelect(day)}
              className={`
                flex flex-col items-center px-4 py-2 rounded-2xl min-w-[60px] transition-colors
                ${isSelected ? "bg-custom-yellow" : "bg-transparent hover:bg-gray-50"}
              `}
            >
              <span className="text-black text-[0.938rem] font-semibold leading-4">
                {format(day, "d")}
              </span>
              <span className="text-black text-[0.938rem] font-normal capitalize">
                {format(day, "EEEEEE", { locale: ru })}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default DateSelector;
