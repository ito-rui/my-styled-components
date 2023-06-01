import type { ReactNode, HTMLAttributes } from "react";
import type { BaseCSSSpanType } from "../CSSProperties";

export type StyledSpanHoverType = {
	hover?: BaseCSSSpanType & {};
};

export type StyledSpanType = BaseCSSSpanType & StyledSpanHoverType;

export type StyledButtonIconType = StyledSpanType;

type StylesType = StyledSpanType;

type BasePropsType = {
	[props: string]: string | object | ReactNode | HTMLAttributes<HTMLSpanElement> | StylesType;
	children?: ReactNode;
};

export type RvSpanFCType = BasePropsType & StyledSpanType;
