import { ReactNode } from "react";

export interface StatCardProps {
    title:string;
    value:number | string;
    icon:ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
      };
}