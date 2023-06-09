import type { HTMLAttributes } from "react";
import type { StyledFlexType } from "./Div";
import type { MarginBottomType } from "../CSSProperties";
import { BasePropsType } from "./Props";

export type StyledRowType = StyledFlexType & {
	space?: MarginBottomType;
};

export type RvRowFCType = StyledRowType & BasePropsType<HTMLAttributes<HTMLDivElement>>;
