import type {InfoCardProps} from "@/types";
import Card from "@components/ui/cards/Card.tsx";
import {cn} from '@/lib/cn.ts';

const InfoCard = ({title, subtitle, badges = [], classname}: InfoCardProps) => {
  return (
    <Card classname={cn(classname, "h-45 bg-custom-gray flex flex-col")}>
      <div className="flex flex-col">
        <h1 className="text-black text-base font-medium leading-5.5">{title}</h1>
        <p className="text-[0.938rem] text-black/55 font-medium">{subtitle}</p>
      </div>
      {badges.length > 0 && (
        <div className="mt-auto flex gap-2 flex-wrap">
          {badges.map((b, i) => (
            <p
              className={cn(
                b.classname ?? "bg-white",
                "rounded-full px-4 py-2 text-sm font-medium"
              )}
              key={i + b.id}>{b.name}</p>
          ))}
        </div>
      )}
    </Card>
  );
};

export default InfoCard;