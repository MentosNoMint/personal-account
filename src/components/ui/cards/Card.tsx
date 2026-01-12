import {cn} from '@/lib/cn.ts';
import type {CardProps} from "@/types";

const Card = ({classname, children}: CardProps) => {
  return (
    <div className={cn(classname, 'w-full rounded-[2.25rem] px-5.5 py-5 bg-custom-gray')}>
      {children}
    </div>
  );
};

export default Card;