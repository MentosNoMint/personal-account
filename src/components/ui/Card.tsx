import {cn} from '@/lib/cn'
import type {CardProps} from "@/types";

const Card = ({classname, children}: CardProps) => {
    return (
        <div className={cn(classname, 'w-full rounded-[2.25rem] px-5.5 py-5')}>
            {children}
        </div>
    );
}

export default Card;