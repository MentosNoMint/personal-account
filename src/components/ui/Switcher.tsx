import type {SwitcherProps} from "@/types";
import {cn} from "@/lib/cn";
import Card from "@components/ui/cards/Card.tsx";

const Switcher = ({options, value, onChange, className}: SwitcherProps) => {
  return (
    <Card classname={className}>
      <p className="text-black text-base font-medium">Выбрать режим</p>
      <div
        className="w-full h-18 bg-white rounded-3xl flex gap-2 items-center px-2 py-2 overflow-x-auto mt-3">
        {options.map((option) => {
          const active = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={cn(
                active ? "bg-custom-yellow" : "bg-white",
                "flex flex-col items-center w-full h-full rounded-2xl justify-center"
              )}
            >
                            <span className="text-black text-[0.938rem] font-medium leading-4">
                                {option.label}
                            </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default Switcher;