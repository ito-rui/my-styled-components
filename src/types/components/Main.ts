import type { HTMLAttributes } from "react";
import type { BasePropsType } from "./Props";
import type { StyledFlexType } from "./Div";

export type StyledMainType = StyledFlexType;

export type RvMainFCType = StyledFlexType & BasePropsType<HTMLAttributes<HTMLDivElement>>;
