import React, { useState, useEffect } from "react";
import { startOfWeek, addDays, format, isSameDay, isSunday } from "date-fns";
import { ru } from "date-fns/locale";

const WeekHeader = ({ onDateSelect }) => {
    // 1. Определяем начало текущей недели (понедельник)
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 });

    // 2. Генерируем массив из 6 дней (Пн - Сб)
    const weekDays = Array.from({ length: 6 }).map((_, index) => {
        return addDays(startOfCurrentWeek, index);
    });

    // 3. Состояние для выбранного дня
    // Если сегодня воскресенье (его нет в списке), выбираем понедельник по умолчанию
    const [selectedDate, setSelectedDate] = useState(() => {
        return isSunday(today) ? weekDays[0] : today;
    });

    // Обработчик клика
    const handleDayClick = (day) => {
        setSelectedDate(day);
        if (onDateSelect) {
            onDateSelect(day);
        }
    };

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {weekDays.map((day) => {
                const isSelected = isSameDay(day, selectedDate);

                // Форматируем название дня (пн, вт...) и число
                // EEEEEE - даст "пн", "вт" (две буквы в ru локали иногда специфичны, EEE надежнее)
                const dayName = format(day, "EEE", { locale: ru });
                const dayNumber = format(day, "d");

                return (
                    <div
                        key={day.toString()}
                        onClick={() => handleDayClick(day)}
                        style={{
                            cursor: "pointer",
                            textAlign: "center",
                            padding: "5px",
                            // Логика подсветки (заменишь потом на свои стили/классы)
                            border: isSelected ? "2px solid blue" : "1px solid #ccc",
                            borderRadius: "50%",
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: isSelected ? "#e0f2fe" : "transparent"
                        }}
                    >
                        {/* Название дня делаем с большой буквы */}
                        <span style={{ fontSize: "10px", textTransform: "capitalize" }}>
              {dayName}
            </span>
                        <span style={{ fontWeight: "bold" }}>{dayNumber}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default WeekHeader;
