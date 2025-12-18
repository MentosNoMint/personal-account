import type {ReactNode} from "react";

export type CardProps = {
    classname: string,
    children?: ReactNode,
}

export type ScheduleEvent = {
    id: string;
    title: string;
    startTime: string;
    endTime: string;
    color: string;
    cabinet: string;
};