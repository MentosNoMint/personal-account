import CustomSelect from "@components/ui/CustomSelect.tsx";
import SubjectCard from "@/pages/AcademicPerformance/components/SubjectCard.tsx";
import Switcher from "@components/ui/Switcher.tsx";
import {useState} from "react";
import BottomSheet from "@components/ui/BottomSheet.tsx";

const AcademicPerformance = () => {
  const [tab, setTab] = useState<"current" | "gradeBook">("current");

  return (
    <div className="w-full flex flex-col gap-2">
      <BottomSheet render={() => (
        <div className="flex flex-col w-full gap-2 mt-4 overflow-y-auto">
          <div className="w-full bg-custom-gray h-18 rounded-full px-1 py-1 flex items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shrink-0">
              ⏰
            </div>
            <div
              className="h-16 w-32 bg-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">
              14 декабря
            </div>
            <div
              className="h-16 w-full bg-white rounded-full flex items-center justify-center text-sm font-medium">
              Оценка: 5 👌
            </div>
          </div>
          <div className="w-full bg-custom-gray h-18 rounded-full px-1 py-1 flex items-center">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shrink-0">
              ✅
            </div>
            <div
              className="h-16 w-32 bg-white rounded-full flex items-center justify-center text-sm font-medium shrink-0">
              26 декабря
            </div>
            <div
              className="h-16 w-full bg-white rounded-full flex items-center justify-center text-sm font-medium">
              Без оценки
            </div>
          </div>
        </div>
      )} />
      <Switcher
        options={[
          {label: "Текущая", value: "current"},
          {label: "Зачётка (итог)", value: "gradeBook"},
        ]}
        value={tab}
        onChange={(v) => setTab(v as typeof tab)}
      />
      <CustomSelect />
      <div className="flex flex-col gap-2 w-full">
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
        <SubjectCard />
      </div>
    </div>
  );
};

export default AcademicPerformance;
