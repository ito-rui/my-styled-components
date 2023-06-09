import type { HTMLAttributes } from "react";
import type { BasePropsType } from "./Props";
import type { StyledDivType } from "./Div";

export type StyledMainType = StyledDivType;

export type RvMainFCType = StyledDivType & BasePropsType<HTMLAttributes<HTMLDivElement>>;
