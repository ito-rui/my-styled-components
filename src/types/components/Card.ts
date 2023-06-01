import type { ReactNode, HTMLAttributes } from "react";
import type { StyledFlexType } from "./Div";

export type StyledCardType = StyledFlexType;

export type StyledCardHeaderType = StyledCardType;

type StylesType = StyledCardType;

type BasePropsType = {
	[props: string]: string | object | ReactNode | HTMLAttributes<HTMLDivElement> | StylesType;
	children?: ReactNode;
};

export type RvCardFCType = BasePropsType & StyledCardType;

export type RvCardHeaderFCType = BasePropsType &
	StyledCardHeaderType & {
		headerLabel?: string | ReactNode;
	};
