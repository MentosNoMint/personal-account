import type {ReactNode} from "react";

export type CardProps = {
  classname?: string,
  children?: ReactNode,
}

export type PairCardProps = {
  name: string,
  teacher: string,
  time: string,
  cab: string,
}

export type BadgeProps = {
  id: number,
  name: string,
  classname?: string,
}

export type InfoCardProps = {
  title: string;
  subtitle?: string;
  badges?: BadgeProps[];
  classname?: string;
};

export type SwitcherProps = {
  options: { label: string, value: string }[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};