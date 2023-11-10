import { ReactNode } from "react";

export interface ChatDataInterface {
    sender: string;
    type: string;
    data: string | ReactNode ;
    show: boolean
  }

export interface ChatContainerPropsInterface {
  data: any;
}
