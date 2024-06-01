import { ReactNode, MouseEventHandler, Dispatch, SetStateAction } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface TimeProps {
  time: number;
}

export interface ButtonProps extends ChildrenProps {
  type: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLElement>;
}

export interface StateProps {
  state: any;
}

export interface SetStateProps {
  setState: Dispatch<SetStateAction<any>>;
}

export interface ComponentProps extends StateProps, SetStateProps {
  property: string;
}

export interface SetPopupProps {
  popupStatus: string;
  setPopupIsOpen: (isOpen: boolean) => void;
  setPopupStatus: (status: string) => void;
}
