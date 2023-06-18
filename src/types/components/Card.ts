import type { ReactNode, HTMLAttributes } from "react";
import type { BasePropsType } from "./Props";
import type { StyledFlexType } from "./Div";

export type StyledCardType = StyledFlexType;

export type StyledCardHeaderType = StyledCardType;

type StylesType = StyledCardType;

export type RvCardFCType = BasePropsType<HTMLAttributes<HTMLDivElement> | StylesType> & StyledCardType;

export type RvCardHeaderFCType = BasePropsType<HTMLAttributes<HTMLDivElement> | StylesType> &
	StyledCardHeaderType & {
		label?: string | ReactNode;
	};
